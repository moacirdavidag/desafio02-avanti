import { prismaClient } from "../database/prisma-client-js.js";


    export const getCampeonatos = async (request, response) =>{
        const campeonatos = await prismaClient.campeonato.findMany();
        response.status(200).json(campeonatos);
    }

    export const createCampeonato = async (request, response) =>{
        try {
            const { nome, data_inicio, data_fim } = request.body;

            const campeonato = await prismaClient.campeonato.create({
                data: {
                    nome,
                    data_inicio,
                    data_fim,
                },
            });

            return response.status(201).json(campeonato);
        }
        catch (error) {
            return response.status(500).json({ error: 'An error occurred' });
        }
    }

    export const updateCampeonato = async (request, response) => {
    
        const campeonato = await prismaClient.campeonato.findUnique({ where: {  id: request.params.id } });
        if (!campeonato) {
            return response.status(404).json({ err: 'Não achei o Campeonato' });
        }
        const updatedCampeonato = await prismaClient.campeonato.update({
            where: {
                id: request.params.id
            },
            data: request.body
        });
        return response.status(200).json(updatedCampeonato)
    
    }



 

    export const deleteCampeonato = async (request, response) => {
    try {
        const campeonato = await prismaClient.campeonato.findUnique({ where: { id: request.params.id } });
        if (!campeonato) {
            return response.status(404).json({ err: 'Campeonato não encontrado!' });
        }
    
        const deletedCampeonato = await prismaClient.campeonato.delete({
            where: {
                id: request.params.id
            }
        })
      return response.json(deletedCampeonato);
      
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }



export default { getCampeonatos, createCampeonato, updateCampeonato , deleteCampeonato};