const express = require('express');
const markerController = require('../Controllers/markerController');
const router = express.Router();

router.post('/markers', markerController.createMarker);
router.get('/markers', markerController.getMarkers);
router.delete('/markers/:id', markerController.deleteMarker);

module.exports = router;