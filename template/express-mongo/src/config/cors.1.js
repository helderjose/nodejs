/*
Obs: Nesse exemplo habilita o CORS para qualquer origem,
não faça isso em uma aplicação real, permita apenas
a origem desejada.
*/

/*
O CORS permite acessar nossa aplicação de outro contexto (origem diferente), por exemplo, a aplicação
roda na porta 8080 e o front-end vai estar rodando em outra porta.

next -> Conhecido como chain (padrão chain of responsability), é o next
que diz se vai para o próximo filtro, próximo middleware ou se vai abortar por exemplo.
*/

/*
- adiciona os cabeçalhos no response:
res.header('Access-Control-Allow-Origin', '*')  //permite qualquer origem
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
*/
module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}