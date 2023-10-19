import React, { useEffect } from "react";
import { loadModules } from "esri-loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMarkers, addMarker, removeMarker } from "../slices/markerSlice";


const ArcGISMapPage = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.marker.markers);

  const initMap = () => {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
      ],
      { css: true }
    ).then(([ArcGISMap, MapView, Graphic, GraphicsLayer]) => {
      const map = new ArcGISMap({
        basemap: "topo-vector",
      });

      const view = new MapView({
        container: "mapDiv",
        map: map,
        zoom: 8,
        center: [12.4924, 41.8902],
      });

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      markers.forEach((marker) => {
        const pointGraphic = new Graphic({
          geometry: {
            type: "point",
            latitude: marker.latitude,
            longitude: marker.longitude,
          },
          symbol: {
            type: "simple-marker",
            color: "red",
            size: "12px",
          },
          attributes: {
            id: marker._id,
          },
        });
        graphicsLayer.add(pointGraphic);
      });

      view.on("click", function (event) {
        view.hitTest(event).then(function (response) {
          if (response.results.length) {
            const clickedGraphic = response.results.filter((result) => {
              return result.graphic.layer === graphicsLayer;
            })[0]?.graphic;

            if (clickedGraphic) {
              const markerId = clickedGraphic.attributes.id;
              deleteMarker(markerId);
              graphicsLayer.remove(clickedGraphic);
            } else {
              const newPoint = {
                type: "point",
                latitude: event.mapPoint.latitude,
                longitude: event.mapPoint.longitude,
              };

              axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/markers`, newPoint)
                .then((response) => {
                  const markerId = response.data._id;
                  if (!markerId) {
                    console.error("Marker ID not received from backend");
                    return;
                  }
                  const pointGraphic = new Graphic({
                    geometry: newPoint,
                    symbol: {
                      type: "simple-marker",
                      color: "red",
                      size: "12px",
                    },
                    attributes: {
                      id: markerId,
                    },
                  });

                  graphicsLayer.add(pointGraphic);
                  dispatch(addMarker({ ...newPoint, _id: markerId }));
                })
                .catch((error) => {
                  console.error("Error saving marker:", error);
                });
            }
          }
        });
      });
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/markers`)
      .then((response) => {
        dispatch(setMarkers(response.data));
        initMap();
      })

      .catch((error) => {
        console.error("Error retrieving tokens:", error);
      });
  }, [dispatch]);

  const deleteMarker = (markerId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/markers${markerId}`)
      .then(() => {
        console.log("Counter successfully eliminated");
        dispatch(removeMarker(markerId));
      })
      .catch((error) => {
        console.error("Error deleting marker", error);
      });
  };

  return <div id="mapDiv" className="h-128 w-full" />;
};

export default ArcGISMapPage;
