import { Request, Response } from "express";
import { QueryResult } from 'pg';
import bcryptjs from 'bcryptjs';

import { pool } from '../database/connection';
import { generarJWT } from "../helpers/generar-jwt";


export const registrarse = async (req: Request, res: Response) => {

    const { nombre, correo, password, rol } = req.body;

    try {

        // Verficiar si ya existe el usuario
        const usuarioExiste: QueryResult = await pool.query('SELECT * FROM public.usuario WHERE email = $1', [correo]);
        if (usuarioExiste.rows.length > 0) {
            return res.status(500).json('El correo ya esta registrado.');
        }

        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        const passwordEncriptado = bcryptjs.hashSync(password, salt);

        const response: QueryResult = await pool.query('INSERT INTO public.usuario(email, nombre, idestadousuario, idsubscripcion, iniciosubscripcion, finsubscripcion, fotourl, rolid, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [correo, nombre, 1, 1, '1-1-2022', '1-1-2023', '', 1, passwordEncriptado]);

        const nuevoUsuario: QueryResult = await pool.query("SELECT * FROM public.usuario WHERE email=$1", [correo]);
        const idUsuario = nuevoUsuario.rows[0].idusuario;

        // Generar el JWT
        const token = await generarJWT(idUsuario);
        
        return res.status(500).json({
            ok: true,
            token: "123"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }
}

export const getUsuarios = async (req: Request, res: Response): Promise<Response> => {

    try {
        const response: QueryResult = await pool.query('SELECT * FROM public.usuario');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }

}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Get usuario',
        id
    });
}


export const putUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Put usuario',
        id,
        body
    });
}

export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete usuario',
        id
    });
}