import { prismaClient } from "../database/prisma-client-js.js";

// Listar todos os times
export const getTimes = async (request, response) => {
  try {
    const times = await prismaClient.time.findMany();
    response.status(200).json(times);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao buscar times' });
  }
};

// Obter detalhes de um time por ID
export const getTime = async (request, response) => {
  const { id } = request.params;
  try {
    const time = await prismaClient.time.findUnique({ where: { id: parseInt(id) } });
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
  try {
    const { nome, fundacao } = request.body;

    const time = await prismaClient.time.create({ data: { nome, fundacao: new Date(fundacao) } });
    response.status(201).json(time);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao criar time \n' + error.message });
  }
};

// Retorna todos os times de um campeonato específico

export const getTimesByCampeonato = async (request, response) => {
  try {
    const { campeonatoId } = request.params;

    const campeonato = await prismaClient.campeonato.findFirst({
      where: {
        id: campeonatoId
      }
    });

    if (!campeonato) {
      return response.status(404).send("Campeonato não encontrado!");
    }

    const times = await prismaClient.campeonatoTime.findMany({
      where: {
        campeonatoId
      }, include: {
        time: true
      }
    })

    return response.status(200).send(times);

  } catch (error) {
    return response.status(500).send(`Ocorreu um erro: ${error.message}`);
  }
}

// Criar um novo time com um campeonato

export const createTimeWithCampeonato = async (request, response) => {
  try {
    const { nome, fundacao, campeonatoId } = request.body;

    const campeonato = await prismaClient.campeonato.findFirst({
      where: {
        id: campeonatoId
      }
    });

    if (!campeonato) {
      return response.status(404).send("Campeonato não encontrado!");
    }

    const timeCampeonato = await prismaClient.campeonatoTime.create({
      data: {
        time: {
          create: {
            nome,
            fundacao: new Date(fundacao),
          }
        },
        campeonato: {
          connect: {
            id: campeonatoId
          }
        }
      }
    })

    return response.status(201).send(timeCampeonato);

  } catch (error) {
    return response.status(500).send(`Ocorreu um erro: ${error.message}`);
  }
}

// Atualizar dados de um time por ID
export const updateTime = async (request, response) => {
  const { id } = request.params;
  const { nome, fundacao } = request.body;
  try {
    const updatedTime = await prismaClient.time.update({
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
    await prismaClient.time.delete({ where: { id: parseInt(id) } });
    response.json({ message: 'Time excluído com sucesso' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Erro ao excluir o time' });
  }
};

export default { getTimes, getTime, createTime, updateTime, deleteTime };
