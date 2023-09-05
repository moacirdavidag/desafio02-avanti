import { PrismaClient } from "@prisma/client";

// Listar todos os times
export const getTimes = async (request, response) => {
  try {
    const times = await prisma.time.findMany();
    response.json(times);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao buscar times' });
  }
};

// Obter detalhes de um time por ID
export const getTime = async (request, response) => {
  const { id } = request.params;
  try {
    const time = await prisma.time.findUnique({ where: { id: parseInt(id) } });
    if (!time) {
      response.status(404).json({ error: 'Time não encontrado' });
    } else {
      response.json(time);
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao buscar o time' });
  }
};

// Criar um novo time
export const createTime = async (request, response) => {
  const { nome, fundacao } = request.body;
  try {
    const time = await prisma.time.create({ data: { nome, fundacao } });
    response.status(201).json(time);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao criar time' });
  }
};

// Atualizar dados de um time por ID
export const updateTime = async (request, response) => {
  const { id } = request.params;
  const { nome, fundacao } = request.body;
  try {
    const updatedTime = await prisma.time.update({
      where: { id: parseInt(id) },
      data: { nome, fundacao },
    });
    response.json(updatedTime);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao atualizar o time' });
  }
};

// Excluir um time por ID
export const deleteTime = async (request, response) => {
  const { id } = request.params;
  try {
    await prisma.time.delete({ where: { id: parseInt(id) } });
    response.json({ message: 'Time excluído com sucesso' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao excluir o time' });
  }
};

export default { getTimes, createTime, updateTime, deleteTime };
