import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

import { obtenerSubscriptores, nuevoSubscriptor, actualizarSubscriptor, verSubscriptor } from '../controller/subscriptores';


const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], obtenerSubscriptores);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('usuario', 'El usuario de la subscripcion es obligatorio').not().isEmpty(),
    check('vencimiento', 'El vencimiento de la subscripcion es obligatorio').not().isEmpty(),
    validarCampos
], nuevoSubscriptor);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], actualizarSubscriptor);

router.get('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], verSubscriptor);

export default router;