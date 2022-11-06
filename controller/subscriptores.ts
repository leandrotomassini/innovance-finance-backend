import { Request, Response } from 'express';

import { Subscriptor } from '../models/subscriptores';


export const obtenerSubscriptores = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const subscriptores = await Subscriptor.find()
        .populate('usuario');

        res.status(200).json({
            ok: true,
            subscriptores
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const nuevoSubscriptor = async (req: Request, res: Response) => {

    try {

        const usuario = req.body.usuario;


        const subscriptorDB = await Subscriptor.findOne({ usuario })
        .populate('usuario');

        if (subscriptorDB) {
            return res.status(400).json({
                msg: `Error, ${subscriptorDB.usuario.correo}, ya cuenta con una subscripción.`
            });
        }

        const nuevoSubscriptor = new Subscriptor(req.body);

        // Guardar DB
        await nuevoSubscriptor.save();

        res.status(200).json({
            ok: true,
            nuevoSubscriptor
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const actualizarSubscriptor = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        
        const subscriptor = await Subscriptor.findByIdAndUpdate(id, req.body, { new: true })
        .populate('usuario');

        res.status(200).json({
            ok: true,
            subscriptor
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const verSubscriptor = async (req: Request, res: Response) => {
    try {
        const subscriptorId = req.params.id;

        const subscriptor = await Subscriptor.findById(subscriptorId)
        .populate('usuario');

        res.status(200).json({
            ok: true,
            subscriptor
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}