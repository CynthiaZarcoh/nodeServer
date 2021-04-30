const {response, request} = require('express');

const getUsers = (req= request, res = response)=> {
    const {q, name='no name', apikey, page, limit} = req.query;

    res.json({
        msg: "get API controlador",
        q,
        name,
        apikey,
        page,
        limit
    });
}

const putUsers = (req, res = response)=> {
    const {userId} = req.params;

    res.json({
        msg: "put API controlador",
        userId
    });
}
const postUsers = (req, res = response)=> {
    const {name, age} = req.body;

    res.json({
        msg: "post API controlador",
        name,
        age
    });
}

const deleteUsers = (req, res = response)=> {
    res.json({
        msg: "delete API controlador"
    });
}


module.exports ={
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}