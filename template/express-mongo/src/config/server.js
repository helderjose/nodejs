const port = 3003

// faz parse do corpo da requisicao
const bodyParser = require('body-parser')

// servidor web que roda no nodeJs
const express = require('express')

// cria uma instancia do express
const server = express()
const allowCors = require('./cors')

/*
usa o bodyParser para urlencoded (form submit)
padrao usado pela submissao de formulario eh o urlencoded
 extended: true suporta mais tipos de dados  que o padrao */
server.use(bodyParser.urlencoded({ extended: true }))

// usa o bodyParser para fazer parse de json
server.use(bodyParser.json())
server.use(allowCors)

// registra a porta que foi declarada
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})


//exporta o server para usar no loader.js
module.exports = server
