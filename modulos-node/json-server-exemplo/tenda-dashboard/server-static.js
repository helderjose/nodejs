const config = require('./config.js');

const host = config.host
const port = config.port
const domain = config.domain
const url = host + ':' + port + domain
const endpoint = config.domain

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db-static.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.post(`${endpoint}/trafficFiles`, function (req, res) {
  const db = router.db // lowdb instance
  const files = db.get('trafficFiles').value()

  res.jsonp(files)
})

server.use(router)
server.listen(port, function () {
  console.log(`JSON Server running in: ${url}`)
  console.log('Esse server sempre retorna a mesma resposta')
})