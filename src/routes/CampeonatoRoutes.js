import { Router } from 'express';
import { createCampeonato, deleteCampeonato, getCampeonatos, updateCampeonato } from "../controllers/campeonatoController.js";

const router = Router();

router.get("/campeonatos", getCampeonatos);
router.post("/campeonato", createCampeonato);
router.put("/campeonato/:id", updateCampeonato);
router.delete("/campeonato/:id", deleteCampeonato);

export { router };