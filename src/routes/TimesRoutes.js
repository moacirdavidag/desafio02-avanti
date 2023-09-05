const express = require('express');
import { prismaClient } from "../database/prisma-client-js.js";

const router = express.Router();

// Listar todos os times
router.get('/times', async (req, res) => {
  try {
    const times = await prismaClient.time.findMany();
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
    const time = await prismaClient.time.findUnique({ where: { id: parseInt(id) } });
    if (!time) {
      res.status(404).json({ error: 'Time não encontrado' });
    } else {
      res.json(time);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o time' });
  }
});

// Criar um novo time
router.post('/times', async (req, res) => {
  const { nome, fundacao } = req.body;
  try {
    const time = await prismaClient.time.create({ data: { nome, fundacao } });
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
    const time = await prismaClient.time.findFirst({
      where: {
        id
      }
    });
    if (!time) {
      return res.status(404).send("Time não encontrado!");
    }
    const updatedTime = await prismaClient.time.update({
      where: { id },
      data: { nome, fundacao },
    });
    res.status(200).json(updatedTime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o time' });
  }
});

// Excluir um time por ID
router.delete('/times/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const time = await prismaClient.time.findFirst({
      where: {
        id
      }
    });
    if (!time) {
      return res.status(404).send("Time não encontrado!");
    }
    const deletedTime = await prismaClient.time.delete({ where: { id } });
    res.json(deletedTime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o time' });
  }
});

module.exports = router;





