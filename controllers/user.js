import { response, request } from "express";

const getUsers = (req = request, res = response) => {

    const query = req.query

    res.json({
        msg: 'Get API - Controller',
        query
    });
}

const putUsers = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'Put API - Controller',
        id
    });
}

const postUsers = (req, res = response) => {

    const body = req.body

    res.json({
        msg: 'Post API - Controller',
        body
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controller'
    });
}

export {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}