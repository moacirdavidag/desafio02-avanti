import { Router } from 'express';
import { getTimes, deleteTime, getTime, createTime, updateTime } from "../controllers/timeController.js"

const router = Router();



// visualização de  todos os times
router.get('/times', getTimes);

// Visualização de um time por ID
router.get('/time/:id',getTime);
 

// Criação um novo time
router.post('/time',createTime); 
 

// Atualizar dados de um time por ID
router.put('/time/:id',updateTime); 


// Exclusão um time por ID
router.delete('/time/:id', deleteTime);

export { router };





