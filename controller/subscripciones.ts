import { Request, Response } from 'express';

import { Subscripcion } from '../models/subscripciones';

export const getSubscripciones = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const subscripciones = await Subscripcion.find();

        res.status(200).json({
            ok: true,
            subscripciones
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const crearSubscripcion = async (req: Request, res: Response) => {

    try {

        const titulo = req.body.titulo;
        
        
        const subscripcionDB = await Subscripcion.findOne({ titulo });

        if (subscripcionDB) {
            return res.status(400).json({
                msg: `Error, ${titulo}, ya existe`
            });
        }

        const data = {
            titulo: titulo.toUpperCase(),
        }

        const nuevaSubscripcion = new Subscripcion(req.body);

        // Guardar DB
        await nuevaSubscripcion.save();

        res.status(200).json({
            ok: true,
            nuevaSubscripcion
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const putSubscripcion = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        const subscripcion = await Subscripcion.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            subscripcion
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const getSubscripcion = async (req: Request, res: Response) => {
    try {
        const subscripcionId = req.params.id;

        const subscripcion = await Subscripcion.findById(subscripcionId);

        res.status(200).json({
            ok: true,
            subscripcion
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}