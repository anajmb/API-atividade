const express = require('express')
const router = require('./src/router')
const { PrismaClient } = require("@prisma/client")

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(router)

app.listen(8080, () => {
    console.log("Servidor rodando na porta", 8080)
})