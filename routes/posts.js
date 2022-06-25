const { Router } = require("express");
const { check } = require('express-validator');

const { obtenerPosts, nuevoArticulo } = require("../controllers/posts");

const { existeSubscripcionPorId } = require("../helpers/db-validators");


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos,
], obtenerPosts);

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('titulo', 'El título es obligatorio').not().isEmpty(),
    check('contenido', 'El contenido es obligatorio').isLength({ min: 20 }),
    check('categorias', 'La categoría es obligatoria.').not().isEmpty(),
    validarCampos
], nuevoArticulo);


module.exports = router;

