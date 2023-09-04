const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

//Listar todos os times

router.get("/times",async(req,res) =>{
  const times = await prisma.time.findMany();
  res.json(times);
});

//Obter detalhes de um time por ID
router.get("/time/:id",async(req,res) => {
  const { id } = req.params;
  const time = await prisma.time.findUnique({where: {id:parseInt(id) } } );
  res.json(time || {error:"Time não encontrado" });
 });


//Criar um novo time
router.post("/times/:id",async(req,res) => {
  const { id } = rerq.params;
  const { nome,fundacao } = req.body;
  const updatedTime = await prisma.time.update({
    where: {id:parseInt(id) },
    data: { nome,fundacao },
  });
  res.json(updatedTime);
  });

// Atualizar dados de um time por ID
router.put('/times/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, fundacao } = req.body;
  const updatedTime = await prisma.time.update({
    where: { id: parseInt(id) },
    data: { nome, fundacao },
  });
  res.json(updatedTime);
});



//Excluir um time por ID
router.delete("/times/:id",async (req,res) => {
  const {id} = req.params;
  await prisma.time.delete({where: {id: parseInt(id)}});
  res.json({ message: "Time excluído com sucesso "});
 });

module.exports = router;



