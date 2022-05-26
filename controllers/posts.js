const { response } = require("express");


const obtenerPosts = (req, res = response) => {

    const idSubscripcion = req.params;


    return res.status(200).json({
        ok: true,
        msg: idSubscripcion
    });
}


const cearPost = (req, res = response) => {

    


    return res.json({
        ok: true,
        msg: 'Crear post.'
    });
}

const actualizarPost = (req, res = response) => {




    return res.json({
        ok: true,
        msg: 'Crear post.'
    });
}

const borrarPost = (req, res = response) => {




    return res.json({
        ok: true,
        msg: 'Borrar post'
    });
}

module.exports = {
    obtenerPosts,
    borrarPost,
    cearPost,
    actualizarPost
}