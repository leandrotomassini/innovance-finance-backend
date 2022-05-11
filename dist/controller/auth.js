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
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = require("../database/connection");
const generar_jwt_1 = require("../helpers/generar-jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, password } = req.body;
        const response = yield connection_1.pool.query("SELECT * FROM public.usuario WHERE email=$1", [correo]);
        if (response.rows.length == 0) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        ;
        if (response.rows[0].idestadousuario != 1) {
            return res.status(400).json({
                msg: 'Cuenta desactivada temporalmente, por favor revise el estado de su subscripción.'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, response.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        const token = yield (0, generar_jwt_1.generarJWT)(response.rows[0].idusuario);
        return res.json({
            ok: true,
            msg: "Login ok",
            correo,
            token
        });
    }
    catch (error) {
        return res.status(500).json('Internal server error.');
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map