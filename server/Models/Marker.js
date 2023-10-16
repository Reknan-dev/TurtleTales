const mongoose = require('mongoose');

const MarkerSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Marker', MarkerSchema);