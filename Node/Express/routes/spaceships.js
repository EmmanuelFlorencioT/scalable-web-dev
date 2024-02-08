const express = require('express');
const { getAllSpaceships, getSpaceship } = require("../controllers/spaceships");
const router = express.Router();

router.get("/", getAllSpaceships);

router.get("/:id", getSpaceship);

module.exports = router;