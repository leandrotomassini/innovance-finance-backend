import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database/connection';

export const googleSignIn = async (req: Request, res: Response): Promise<QueryResult> => {

    const { google_email, name, img } = req.body;

    try {

        // TODO: verificar  el email
        const response: QueryResult = await pool.query('SELECT * FROM public.usuario WHERE email = $1', [google_email]);
        const respuesta = response.rows[0].email;
        // Verificiar si es un email autorizado y el estado del usuario en la DB

        // Generar un JWT

        res.json({
            ok: true,
            msg: 'Inicio de sesión con Google correcto',
            name,
            img,
            respuesta
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo verificar el token de Google.',
            error
        });
    }
}