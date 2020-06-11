const express = require("express");

const deviceController = require('../controllers/device');

const router = express.Router();

router.get('/devices', deviceController.getDevices);

router.post('/device', deviceController.createDevice);

router.delete(`/device/${idSensor}`, deviceController.deleteDevice);

router.put(`/device/${idSensor}`, deviceController.updateDevice);

module.exports = router;