import { Router, Request, Response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    // return res.json({ ok: true });
    throw new Error('Algo deu errado ao fazer essas requisição')
})

export { router };