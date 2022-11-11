import { Request, Response } from 'express';

import { Articulo } from '../models/articulos';



export const verArticulos = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const articulos = await Articulo.find()
        .populate('usuario');

        res.status(200).json({
            ok: true,
            articulos
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const crearArticulo = async (req: Request, res: Response) => {

    try {

        const titulo = req.body.titulo;

        const articuloDB = await Articulo.findOne({ titulo });

        if (articuloDB) {
            return res.status(400).json({
                msg: `El artículo  '${titulo}', ya existe`
            });
        }

        const nuevoArticulo = new Articulo(req.body);

        // // Guardar DB
        await nuevoArticulo.save();

        res.status(200).json({
            ok: true,
            nuevoArticulo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const actualizarArticulo = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        req.body.usuario = req.body.usuario.uid;

        const articulo = await Articulo.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            articulo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const verArticulo = async (req: Request, res: Response) => {
    try {
        const articuloId = req.params.id;

        
        const articulo = await Articulo.findById(articuloId)
        .populate('usuario');

        res.status(200).json({
            ok: true,
            articulo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}