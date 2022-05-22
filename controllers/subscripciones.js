const { response } = require("express")

const Subscripcion = require('../models/subscripcion');


const obtenerSubscripciones = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, subscripciones] = await Promise.all([
        Subscripcion.countDocuments(query),
        Subscripcion.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        subscripciones
    });
}

const crearSubscripcion = async (req, res = response) => {

    const { nombre, valor } = req.body;
    const subscripcion = new Subscripcion({ nombre, valor });

    await subscripcion.save();

    res.json({
        subscripcion
    });
}

const editarSubscripcion = async (req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const subscripcion = await Subscripcion.findByIdAndUpdate(id, resto, { new: true });

    res.json(subscripcion);
}


const borrarSubscripcion = async (req, res = response) => {

    const { id } = req.params;
    const subscripcion = await Subscripcion.findByIdAndUpdate(id, { estado: false }, { new: true });


    res.json(subscripcion);
}


module.exports = {
    crearSubscripcion,
    editarSubscripcion,
    borrarSubscripcion,
    obtenerSubscripciones
}