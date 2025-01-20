require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT
const host = process.env.HOST

// middlewares globais
app.use(express.json()) // permite json no body das requisições

// importando e usado as rotas
const routes = require('./routes/index')
app.use(routes)

app.listen(port, () => {
    console.log(`Servidor ON`)
    console.log(`http://${host}:${port}`)
})