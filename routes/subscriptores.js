const { Router } = require("express");
const { check } = require('express-validator');

const { subscribirse, obtenerSubscriptor, borrarSubscriptor, obtenerSubscriptores } = require("../controllers/subscriptores");
const { existeSubscripcionPorId } = require("../helpers/db-validators");


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');


const router = Router();

router.get('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], obtenerSubscriptores);

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('subscripcion', 'No es un ID de subscripción válido.').isMongoId(),
    check('subscripcion').custom(existeSubscripcionPorId),
    check('meses', 'La cantidad de meses debe de ser un número.').isNumeric(),
    validarCampos
], subscribirse);

router.get('/:idusuario', [
    validarJWT,
    check('idusuario', 'No es un ID de usuario válido').isMongoId(),
    tieneRole('ADMINISTRADOR'),
    validarCampos
], obtenerSubscriptor);

router.delete('/:idusuario', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('idusuario', 'No es un ID  de usuario válido').isMongoId(),
    validarCampos
], borrarSubscriptor);

module.exports = router;