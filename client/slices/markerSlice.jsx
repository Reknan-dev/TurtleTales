import { createSlice } from "@reduxjs/toolkit";

const markerSlice = createSlice({
  name: "marker",
  initialState: {
    markers: [],
    errors: {},
  },
  reducers: {
    setMarkers: (state, action) => {
      state.markers = action.payload;
    },
    addMarker: (state, action) => {
      state.markers.push(action.payload);
    },
    removeMarker: (state, action) => {
      state.markers = state.markers.filter(marker => marker._id !== action.payload);
    },
    setMarkerErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  setMarkers,
  addMarker,
  removeMarker,
  setMarkerErrors,
} = markerSlice.actions;
export default markerSlice.reducer;
