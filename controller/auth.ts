import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import bcryptjs from 'bcryptjs';

import { pool } from '../database/connection';
import { generarJWT } from '../helpers/generar-jwt';


export const login = async (req: Request, res: Response) => {

    try {

        const { correo, password } = req.body;

        // Verifico si el email existe
        const response: QueryResult = await pool.query("SELECT * FROM public.usuario WHERE email=$1", [correo]);

        if (response.rows.length == 0) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        };

        // Verificar si el usuario esta activo
        if (response.rows[0].idestadousuario != 1) {
            return res.status(400).json({
                msg: 'Cuenta desactivada temporalmente, por favor revise el estado de su subscripción.'
            });
        }

        // TODO: Verficar estado de subscripcion
        

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, response.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(response.rows[0].idusuario);

        return res.json({
            ok: true,
            msg: "Login ok",
            correo,
            token
        });
    } catch (error) {
        return res.status(500).json('Internal server error.');
    }

}

// export const renovarToken = async (req: Request, res: Response) => {
//     // TODO revisar de donde viene 
//     const { uid } = req;

//     // Leer la base de datos
//     const dbUser = await Usuario.findById(uid);

//     // Generar el JWT
//     const token = await generarJWT(uid, dbUser.name);

//     return res.json({
//         ok: true,
//         uid,
//         name: dbUser.name,
//         email: dbUser.email,
//         token
//     });
// };