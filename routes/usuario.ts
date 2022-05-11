import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, registrarse, putUsuario } from "../controller/usuario";

const router = Router();

router.post('/new', registrarse);

router.get('/', getUsuarios);

router.get('/:id', getUsuario);

router.put('/:id', putUsuario);

router.delete('/:id', deleteUsuario);

export default router;
