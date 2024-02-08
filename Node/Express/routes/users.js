//Routes definition for the users endpoint

const express = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/users');
const router = express.Router();

router.get("/", usersGet);

router.post("/", usersPost);

router.put("/:id", usersPut);

router.patch("/", usersPatch);

router.delete("/:id", usersDelete);

module.exports = router;