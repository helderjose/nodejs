const server = require('./config/server')
require('./config/database')

/*
Passa a instancia do server para o router.
Essa linha chama a funcao que foi exportada no routes.js
*/
require('./config/routes')(server)