const { Router } = require("express");
const { check } = require('express-validator');


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
], ()=>{});

module.exports = router;