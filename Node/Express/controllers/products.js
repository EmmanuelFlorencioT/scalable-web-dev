const { response } = require("express");

const productsGet = (req, res = response) => {
    res.status(200).json({
        msg: "Products GET - controller",
    })
}

const productsPost = ("/", (req, res = response) => {
    res.status(200).json({
        msg: "Products POST - controller"
    })
});

const productsPut = ("/", (req, res = response) => {
    res.status(200).json({
        msg: "Products PUT - controller"
    })
});

const productsPatch = ("/", (req, res = response) => {
    res.status(405).json({
        msg: "Products PATCH - controller"
    })
});

const productsDelete = ("/", (req, res = response) => {
    res.status(200).json({
        msg: "Products DELETE - controller"
    })
});

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsPatch,
    productsDelete
};