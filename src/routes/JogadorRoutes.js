import { Router } from 'express';
import { createJogador, deleteJogador, getJogadores, getJogador,updateJogador } from "../controllers/jogadorController.js";

const router = Router();

//Rota para vizualizar todos os jogadores
router.get("/jogadores", getJogadores);

//Rota para vizualizar um jogador pelo seu id
router.get("/jogador/:id", getJogador);

//Rota para adicionar um novo jogador
router.post("/jogador", createJogador);

//Rota para alterar um jogador existente
router.put("/jogador/:id", updateJogador);

//Rota para deletar um jogador existente
router.delete("/jogador/:id", deleteJogador);

export { router };