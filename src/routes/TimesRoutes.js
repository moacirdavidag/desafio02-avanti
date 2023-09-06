import { Router } from 'express';
import { getTimes, getTime, createTime, deleteTime, updateTime, createTimeWithCampeonato, getTimesByCampeonato } from "../controllers/TimeController.js"

const router = Router();

// visualização de  todos os times
router.get('/times', getTimes);

// Visualização de um time por ID
router.get('/time/:id', getTime);

// Retorna todos os times de um campeonato específico

router.get('/timesCampeonato/:id', getTimesByCampeonato);

// Criação um novo time
router.post('/time', createTime);

// Criação de um novo time com campeonato

router.post('/timeCampeonato', createTimeWithCampeonato);

// Atualizar dados de um time por ID
router.put('/time/:id', updateTime);

// Exclusão um time por ID
router.delete('/time/:id', deleteTime);

export { router };





