const { Router } = require("express");
const { check } = require('express-validator');

const { obtenerEscuelas, crearEscuela, editarEscuela, borrarEscuela } = require("../controllers/escuelas");

const { existeEscuela } = require("../helpers/db-validators");

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/', obtenerEscuelas);

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('nombre').custom(existeEscuela),
    validarCampos
], crearEscuela);

router.put('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], editarEscuela);

router.delete('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], borrarEscuela);

module.exports = router;