import { Router } from 'express';
import { createJogador, deleteJogador, getJogadores, getJogador,updateJogador } from "../controllers/jogadorController.js";

const router = Router();

//vizualização de todos os campeonatos
router.get("/jogadores", getJogadores);

//vizualização de um campeonato por id
router.get("/jogador/:id", getJogador);

//criação de um campeonato
router.post("/jogador", createJogador);

//atualização de um campeonato
router.put("/jogador/:id", updateJogador);

//exclusão de um campeonato
router.delete("/jogador/:id", deleteJogador);

export { router };