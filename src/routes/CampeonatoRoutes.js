import { Router } from 'express';
import { createCampeonato, deleteCampeonato, getCampeonatos, getCampeonato,updateCampeonato } from "../controllers/campeonatoController.js";

const router = Router();

//vizualização de todos os campeonatos
router.get("/campeonatos", getCampeonatos);

//vizualização de um campeonato por id
router.get("/campeonato/:id", getCampeonato);

//criação de um campeonato
router.post("/campeonato", createCampeonato);

//atualização de um campeonato
router.put("/campeonato/:id", updateCampeonato);

//exclusão de um campeonato
router.delete("/campeonato/:id", deleteCampeonato);

export { router };