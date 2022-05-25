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

const crearEscuela = () => {

}



module.exports = {
    obtenerEscuelas
}