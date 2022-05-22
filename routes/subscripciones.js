const { Router } = require("express");
const { check } = require('express-validator');

const { existeSubscripcion } = require('../helpers/db-validators.js')

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const {
    crearSubscripcion,
    editarSubscripcion,
    borrarSubscripcion,
    obtenerSubscripciones
} = require('../controllers/subscripciones');


const router = Router();

router.get('/', obtenerSubscripciones);

router.post('/', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    check('nombre').custom(existeSubscripcion),
    validarCampos
], crearSubscripcion);

router.put('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], editarSubscripcion);

router.delete('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], borrarSubscripcion);

module.exports = router;