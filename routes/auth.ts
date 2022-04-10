import { Router } from "express";

import { googleSignIn } from "../controller/auth";

const router = Router();

router.post('/google', googleSignIn)


export default router;