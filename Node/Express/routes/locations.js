const express = require('express');
const { getAllLocations, getLocation } = require("../controllers/locations");
const router = express.Router();

router.get("/", getAllLocations);

router.get("/:id", getLocation);

module.exports = router;