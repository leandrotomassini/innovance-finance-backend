const { Router } = require("express");
const { check } = require('express-validator');

const { subscribirse } = require("../controllers/subscriptores");


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');


const router = Router();

router.get('/', ()=>{});

router.post('/', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    validarCampos
], subscribirse);

module.exports = router;