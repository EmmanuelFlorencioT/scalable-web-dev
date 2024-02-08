const express = require('express');
const { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/movies');
const router = express.Router();

router.get("/", getAllMovies);

router.get("/:id", getMovie);

router.post("/", createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;