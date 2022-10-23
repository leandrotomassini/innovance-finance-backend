import { Router } from 'express';
import { check } from 'express-validator';

import { getRoles, postRol, putRol } from '../controller/rol';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], getRoles);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos
], postRol);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], putRol);

export default router;