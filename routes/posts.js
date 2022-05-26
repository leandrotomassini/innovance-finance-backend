const { Router } = require("express");
const { check } = require('express-validator');

const { obtenerPosts, actualizarPost, editarPost, crearPost } = require("../controllers/posts");

const { existeSubscripcionPorId } = require("../helpers/db-validators");


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/:idsubscripcion',[
    validarJWT,
    validarCampos,
    existeSubscripcionPorId
], obtenerPosts);

// router.post('/:idsubscripcion', [
//     validarJWT,
//     tieneRole('ADMINISTRADOR'),
//     check('nombre').custom(existeEscuela),
//     validarCampos
// ], crearPost);

// router.put('/:id', [
//     validarJWT,
//     // esAdminRole,
//     tieneRole('ADMINISTRADOR'),
//     validarCampos
// ], editarPost);

// router.delete('/:id', [
//     validarJWT,
//     // esAdminRole,
//     tieneRole('ADMINISTRADOR'),
//     validarCampos
// ], actualizarPost);

module.exports = router;