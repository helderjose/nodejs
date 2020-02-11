const express = require('express')


/*
A variável que vai ser passada como parâmetro é a variável
const server = express() do arquivot server.js
*/
module.exports = function(server) {

    // API Routes
    const router = express.Router()

    /*
    middleware, sermpre que vc ver server.use é um middleware
    sermpre que a urle começar com '/api' o router é chamado
    */
    server.use('/api', router)


    // criando as rotas
    // TODO Routes
    const todoService = require('../api/todo/todoService')
    /*
    .register é do node-restfull.
    .register vai usar os métodos declarados no todoService.js (get, post e etc).
    */
    todoService.register(router, '/todos')
}