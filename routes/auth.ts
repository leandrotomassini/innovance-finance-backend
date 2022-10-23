import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { googleSignIn } from '../controller/auth';


const router = Router();

router.post('/google', [
    check('id_token', 'El Id Token de Google es necesario.').not().isEmpty(),
    validarCampos
], googleSignIn);


export default router;