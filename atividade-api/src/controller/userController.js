const express = require('express')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const userController = {
    create: async (req, res) => {
        try {
            const { nome, email, senha } = req.body

            const userCriado = await prisma.user.create({ data:{ nome, email, senha }})

            return res.status(200).json({
                msg: 'O usuario foi criado com sucesso',
                userCriado
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: 'Ocorreu um erro ao acessar a api'
            })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;

            console.log(id)

            if (!nome || !email || !senha) {
                return res.status(400).json({
                    msg: 'Usuario não encontrado'
                });
            }

            await prisma.user.update({ data: {
                nome, email, senha
            }, where: {
                id: Number(id)
            }} );

            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Ocorreu um erro ao atualizar o usuario'
            })
        }
    },
    findMany: async (req, res) => {
        try {
            const users = await prisma.user.findMany()

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro interno ao buscar todos os usuarios'
            })
        }
    },
    findUnique: async (req, res) => {
        try {
            const { id } = req.params;

            const userEncontrado = await prisma.user.findUnique({ where: {id: Number(id)}});

            if (!id) {
                return res.status(204).json({
                    msg: 'Usuario não encontrado',
                    userEncontrado
                });
            }

            return res.status(200).json({
                msg: 'Usuario unico pego com sucesso!'
            })

        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro interno ao buscar um usuario unico'
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const existeUser = await prisma.user.delete({ where: {id: Number(id)}});
            
            if (!id) {
                return res.status(400).json({
                    msg: 'Usuario não encontrado',
                    existeUser
                });
            }
            
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso!'
            })
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: 'Ocorreu um erro interno ao deletar usuario'
            });
        }
    }

}


module.exports = userController
