import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

import { getSubscripciones, crearSubscripcion, putSubscripcion, getSubscripcion } from '../controller/subscripciones';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], getSubscripciones);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('titulo', 'El título de la subscripcion es obligatorio').not().isEmpty(),
    check('precio', 'El precio de la subscripcion es obligatorio').not().isEmpty(),
    validarCampos
], crearSubscripcion);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], putSubscripcion);

router.get('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], getSubscripcion);

export default router;