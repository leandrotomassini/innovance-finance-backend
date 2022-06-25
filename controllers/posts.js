const { response } = require("express");

const Post = require('../models/post');

const obtenerPosts = async(req, res = response) => {

    const query = { estado: true };
    const articulos = await Post.find(query);

    return res.status(200).json({
        ok: true,
        articulos
    });
}

const nuevoArticulo = async (req, res = response) => {

    const { titulo, portada, contenido, categorias, usuario } = req.body;

    const post = new Post({ titulo, portada, contenido, categorias, usuario });
    await post.save();

    return res.status(200).json({
        ok: true,
        post,
        msg: 'Artículo nuevo creado.'
    });
}


module.exports = {
    nuevoArticulo,
    obtenerPosts
}