import { Router } from 'express';
import { check } from 'express-validator';

import { getRoles, postRol, putRol } from '../controller/rol';
import { validarCampos } from '../middlewares/validar-campost';

const router = Router();

router.get('/', getRoles);

router.post('/', [
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos
], postRol);

router.put('/:id', putRol);

export default router;