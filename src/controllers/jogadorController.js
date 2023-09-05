import { prismaClient } from "../database/prisma-client-js.js";


const getJogadores = async (request, response) => {
    try {
        const jogadores = await prismaClient.jogador.findMany();
        response.status(200).json(jogadores);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

const getJogador = async (request, response) => {
    try {
        let idParams = request.params.id;
        const jogador = await prismaClient.jogador.findUnique({
            where: { id:idParams },
          })
        response.status(200).json(jogador);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

const createJogador = async (request, response) => {
    try {
        const { nome, idade, time_jogador = null} = request.body;

        const jogador = await prismaClient.jogador.create({
            data: {
                nome,
                idade,
                time_jogador
            },
        });

        return response.status(201).json(jogador);
    }
    catch (e) {
        return response.status(500).send(e.message);
    }
}

const updateJogador = async (request, response) => {
    try {
        const jogador = await prismaClient.jogador.findUnique({ where: { id: request.params.id } });
        if (!jogador) {
            return response.status(404).json({ err: 'Jogador não existe' });
        }
        const updatedJogador = await prismaClient.jogador.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedJogador)
    } catch (e) {
        return response.status(500).send(e.message);
    }
}


const deleteJogador = async (request, response) => {
    try {
        const jogador = await prismaClient.jogador.findUnique({ where: { id: request.params.id } });
        if (!jogador) {
            return response.status(404).json({ err: 'Jogador não existe' });
        }

        const deletedJogador = await prismaClient.jogador.delete({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json(deletedJogador);

    } catch (e) {
        return response.status(500).json(e.message);
    }
}

export { getJogadores, createJogador, deleteJogador, getJogador, updateJogador };