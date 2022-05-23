const { Router } = require("express");
const { check } = require('express-validator');

const { subscribirse } = require("../controllers/subscriptores");
const { existeSubscripcionPorId } = require("../helpers/db-validators");


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');


const router = Router();

router.get('/', ()=>{});

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('subscripcion', 'No es un ID válido.').isMongoId(),
    check('subscripcion').custom(existeSubscripcionPorId),
    check('meses', 'La cantidad de meses debe de ser un número.').isNumeric(),
    validarCampos
], subscribirse);

module.exports = router;