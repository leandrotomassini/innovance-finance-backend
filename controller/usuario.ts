import { Request, Response } from "express";
import { QueryResult } from 'pg';

import { pool } from '../database/connection';

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

export const postUsuario = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'Post usuario',
        body
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