const Todo = require('./todo')

//cria a api rest usando node restfull
Todo.methods(['get', 'post', 'put', 'delete'])

/*
Por padrão, quando atualiza um registro, o node restfull retorna o objeto antigo (desatualizado),
com new: true retorna o objeto novo (atualizado).
Por padrão, o node restfull não executa as validações no update, com
runValidators: true ele passa a executar.
*/
Todo.updateOptions({new: true, runValidators: true})

//exporta o Todo com toda API REST funcionando
module.exports = Todo