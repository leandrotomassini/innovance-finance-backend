const { Router } = require("express");
const { check } = require('express-validator');

const { obtenerEscuelas } = require("../controllers/escuelas");

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/', obtenerEscuelas);

// router.post('/', [
//     validarJWT,
//     // esAdminRole,
//     tieneRole('ADMINISTRADOR'),
//     check('nombre').custom(existeSubscripcion),
//     validarCampos
// ], crearEscuela);

// router.put('/:id', [
//     validarJWT,
//     // esAdminRole,
//     tieneRole('ADMINISTRADOR'),
//     validarCampos
// ], editarSubscripcion);

// router.delete('/:id', [
//     validarJWT,
//     // esAdminRole,
//     tieneRole('ADMINISTRADOR'),
//     validarCampos
// ], borrarSubscripcion);

module.exports = router;