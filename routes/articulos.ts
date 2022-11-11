import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

import { verArticulos, crearArticulo, actualizarArticulo, verArticulo } from '../controller/articulos';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], verArticulos);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('titulo', 'El título es obligatorio.').not().isEmpty(),
    check('descripcionCorta', 'La breve descripción es obligatoria.').not().isEmpty(),
    check('portada', 'La portada es obligatoria.').not().isEmpty(),
    check('contenido', 'El contenido es obligatorio.').not().isEmpty(),
    validarCampos
], crearArticulo);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], actualizarArticulo);

router.get('/:id', [
    validarJWT,
    validarCampos
], verArticulo);

export default router;