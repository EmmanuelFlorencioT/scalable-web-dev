//Logic for the callbacks goes here

const { response, request } = require("express"); //To access express response functions and attributes

const usersGet = (req = request, res = response) => {
    //Query params
    const params = req.query;

    res.status(200).json({
        msg: "User GET - controller",
        params,
    })
}

const usersPost = (req = request, res = response) => {
    const body = req.body;

    res.status(200).json({
        msg: "User POST - controller",
        body
    })
}

const usersPut = (req = request, res = response) => {
    const bodyParams = req.body.id; //To send sensible data like passwords, etc.
    const sequenceParams = req.params.id; //To access specific id or object
    const queryParams = req.query.id; //To use them as filters

    res.status(200).json({
        msg: "User PUT - controller",
        bodyParams,
        sequenceParams,
        queryParams,
    })
}

const usersPatch = (req, res = response) => {
    res.status(405).json({
        msg: "User PATCH - controller"
    })
}

const usersDelete = (req = request, res = response) => {
    //Segment Params
    const id = req.params.id;

    res.status(200).json({
        msg: "User DELETE - controller"
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
};