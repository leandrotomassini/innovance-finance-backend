import { Request, Response } from 'express';

import { googleVerify } from '../helpers/google-verify';

export const googleSignIn = async (req: Request, res: Response) => {

    const { id_token } = req.body;

    try {

        const { correo, nombre, img } = await googleVerify(id_token);
        
        await googleVerify(id_token);

        res.json({
            ok: true,
            msg: 'Inicio de sesión con Google correcto',
            correo,
            nombre,
            img
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo verificar el token de Google.',
            error
        });
    }
}