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
    const time = await prismaClient.time.findUnique({ where: { id } });
    if (!time) {
      response.status(404).json({ error: 'Time não encontrado' });
    } else {
      response.status(200).json(time);
    }
  } catch (error) {
    response.status(500).json(`Ocorreu um erro: ${error.message}`);
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

    const times = await prismaClient.campeonato.findFirst({
      where: {
        id: campeonatoId
      },
      include: {
        times_campeonatos: {
          select: {
            timeId: true
          }
        }
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
  try {
    const { id } = request.params;
    const { nome, fundacao } = request.body;

    const time = await prismaClient.time.findFirst({
      where: {
        id
      }
    });

    if (!time) {
      return response.status(404).send("Nenhum time foi encontrado!");
    }
    const updatedTime = await prismaClient.time.update({
      where: { id },
      data: {
        ...request.body,
        fundacao: new Date(fundacao)
      },
    });
    response.status(200).json(updatedTime);
  } catch (error) {
    response.status(500).json(`Ocorreu um erro: ${error.message}`);
  }
};

// Excluir um time por ID
export const deleteTime = async (request, response) => {
  try {
    const { id } = request.params;

    const time = await prismaClient.time.findFirst({
      where: {
        id
      }
    });

    if (!time) {
      return response.status(404).send("Nenhum time foi encontrado!");
    }

    const deletedTime = await prismaClient.time.delete({ where: { id } });
    response.status(200).json(deletedTime);
  } catch (error) {
    response.status(500).json(`Ocorreu um erro: ${error.message}`);
  }
};
