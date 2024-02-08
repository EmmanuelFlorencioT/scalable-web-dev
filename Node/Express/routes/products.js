const express = require('express');
const { productsGet, productsPost, productsPut, productsPatch, productsDelete } = require('../controllers/products');
const router = express.Router();

router.get("/", productsGet);

router.post("/", productsPost);

router.put("/", productsPut);

router.patch("/", productsPatch);

router.delete("/", productsDelete);

module.exports = router;