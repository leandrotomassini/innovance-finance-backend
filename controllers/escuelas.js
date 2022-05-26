const { response } = require("express");

const { Escuela } = require("../models");


const obtenerEscuelas = async (req, res = response) => {

    const query = { estado: true };

    const [total, escuelas] = await Promise.all([
        Escuela.countDocuments(query),
        Escuela.find(query)
    ]);

    return res.json({
        total,
        escuelas
    });
}



const crearEscuela = async (req, res = response) => {

    const { nombre, url, icono, estado } = req.body;
    const escuela = new Escuela({ nombre, url, icono, estado });

    await escuela.save();

    res.json({
        escuela
    });
}

const editarEscuela = async (req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const escuela = await Escuela.findByIdAndUpdate(id, resto, { new: true });

    res.json(escuela);
}


const borrarEscuela = async (req, res = response) => {

    const { id } = req.params;
    const escuela = await Escuela.findByIdAndUpdate(id, { estado: false }, { new: true });


    res.json(escuela);
}



module.exports = {
    obtenerEscuelas,
    crearEscuela,
    editarEscuela,
    borrarEscuela
}
