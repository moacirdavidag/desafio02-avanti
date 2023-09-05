import { Router } from 'express';
import { createTimes, deleteTime, getTime, getTime,updateTime } from "../controllers/timeController.js";

const router = Router();



// Listar todos os times
router.get('/times', async (req, res) => {
  try {
    const times = await prisma.time.findMany();
    res.json(times);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar times' });
  }
});

// Obter detalhes de um time por ID
router.get('/time/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const time = await prisma.time.findUnique({ where: { id: parseInt(id) } });
    if (!time) {
      res.status(404).json({ error: 'Time não encontrado' });
    } else {
      res.json(time);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o time' });
  }
});

// Criar um novo time
router.post('/times', async (req, res) => {
  const { nome, fundacao } = req.body;
  try {
    const time = await prisma.time.create({ data: { nome, fundacao } });
    res.status(201).json(time);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar time' });
  }
});

// Atualizar dados de um time por ID
router.put('/times/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, fundacao } = req.body;
  try {
    const updatedTime = await prisma.time.update({
      where: { id: parseInt(id) },
      data: { nome, fundacao },
    });
    res.json(updatedTime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o time' });
  }
});

// Excluir um time por ID
router.delete('/times/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.time.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Time excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o time' });
  }
});

module.exports = router;





