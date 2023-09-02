import { Router } from 'express';

const router = Router();

router.get('/jogador', (req, res) => {
    res.status(200).send("Um jogador...");
});

export { router };