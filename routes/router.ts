import { Router, Request, Response } from 'express';

const router = Router();


router.get('/mensajes', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Todo esta bién'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;


    res.status(200).json({
        ok: true,
        de,
        cuerpo
    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;


    res.status(200).json({
        ok: true,
        id,
        de,
        cuerpo
    });

});


export default router;