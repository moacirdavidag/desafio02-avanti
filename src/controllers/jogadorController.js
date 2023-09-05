import { prismaClient } from "../database/prisma-client-js.js";

//Controladora para pegar todos os jogadores existentes
const getJogadores = async (request, response) => {
    try {
        const jogadores = await prismaClient.jogador.findMany();
        response.status(200).json(jogadores);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

//Controladora para pegar um jogador por id
const getJogador = async (request, response) => {
    try {
        let idParams = request.params.id;
        const jogador = await prismaClient.jogador.findUnique({
            where: { id: idParams },
        })
        if (!jogador) {
            return response.status(404).send("Jogador não encontrado!");
        }
        response.status(200).json(jogador);
    } catch (e) {
        return response.status(500).send(e.message);
    }
}

//Controladora para criar um novo jogador passando os parametros necessarios
const createJogador = async (request, response) => {
    try {
        const { nome, idade, timeId } = request.body;

        const jogador = await prismaClient.jogador.create({
            data: {
                nome,
                idade,
                timeId
            },
        });

        return response.status(201).json(jogador);
    }
    catch (e) {
        return response.status(500).send(e.message);
    }
}

//Controladora para modificar um jogador pelo id
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

//Controladora para deletar um jogador pelo id
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