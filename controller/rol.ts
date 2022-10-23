import { Request, Response } from 'express';

import { Rol } from '../models/rol';

export const getRoles = (req: Request, res: Response) => {
    try {

        


        res.status(200).json({
            ok: true,
            msg: 'Obtener el rol'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const postRol = async (req: Request, res: Response) => {

    try {

        const rol = req.body.rol;

        const rolDB = await Rol.findOne({ rol });

        if (rolDB) {
            return res.status(400).json({
                msg: `El producto ${rolDB.rol}, ya existe`
            });
        }

        const data = {
            rol: rol.toUpperCase(),
        }

        const rolNuevo = new Rol(data);

        // // Guardar DB
        await rolNuevo.save();

        res.status(200).json({
            ok: true,
            rolNuevo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const putRol = (req: Request, res: Response) => {

    try {

        const id = req.params.id;


        res.status(200).json({
            ok: true,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
} 
 
