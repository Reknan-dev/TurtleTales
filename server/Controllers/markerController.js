const Marker = require("../Models/Marker");

exports.createMarker = async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const marker = new Marker({ latitude, longitude });
    await marker.save();
    res.status(201).send(marker);
  } catch (error) {
    console.error("Error saving marker:", error);
    res.status(500).send({ error: "Server error" });
  }
};

exports.getMarkers = async (req, res) => {
  try {
    const markers = await Marker.find();
    res.send(markers);
  } catch (error) {
    console.error("Error retrieving tokens:", error);
    res.status(500).send({ error: "Server error" });
  }
};

exports.deleteMarker = async (req, res) => {
  const markerId = req.params.id;
  try {
    await Marker.findByIdAndDelete(markerId);
    res.status(200).send({ message: "Counter successfully eliminated" });
  } catch (error) {
    console.error("Error deleting marker", error);
    res.status(500).send({ error: "Server Error" });
  }
};
