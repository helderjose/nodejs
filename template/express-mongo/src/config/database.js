// faz o mapeamento do objeto javascript para o documento mongo, abre conexão com banco e etc
const mongoose = require('mongoose')

/*
Diz para o mongoose usar a api de promise do próprio node.
É só para tirar o warning que diz que a api de promise do mongoose está depreciada.
*/
mongoose.Promise = global.Promise


//mongodb://hostName/nomeDoBanco
module.exports = mongoose.connect('mongodb://localhost/todo')