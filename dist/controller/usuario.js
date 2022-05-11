"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.getUsuario = exports.getUsuarios = exports.registrarse = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = require("../database/connection");
const generar_jwt_1 = require("../helpers/generar-jwt");
const registrarse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, correo, password, rol } = req.body;
    try {
        const usuarioExiste = yield connection_1.pool.query('SELECT * FROM public.usuario WHERE email = $1', [correo]);
        if (usuarioExiste.rows.length > 0) {
            return res.status(500).json('El correo ya esta registrado.');
        }
        const salt = bcryptjs_1.default.genSaltSync();
        const passwordEncriptado = bcryptjs_1.default.hashSync(password, salt);
        const response = yield connection_1.pool.query('INSERT INTO public.usuario(email, nombre, idestadousuario, idsubscripcion, iniciosubscripcion, finsubscripcion, fotourl, rolid, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [correo, nombre, 1, 1, '1-1-2022', '1-1-2023', '', 1, passwordEncriptado]);
        const nuevoUsuario = yield connection_1.pool.query("SELECT * FROM public.usuario WHERE email=$1", [correo]);
        const idUsuario = nuevoUsuario.rows[0].idusuario;
        const token = yield (0, generar_jwt_1.generarJWT)(idUsuario);
        return res.status(500).json({
            ok: true,
            token: "123"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }
});
exports.registrarse = registrarse;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield connection_1.pool.query('SELECT * FROM public.usuario');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error.');
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get usuario',
        id
    });
};
exports.getUsuario = getUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Put usuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete usuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map