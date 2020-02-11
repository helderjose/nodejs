const config = require('./config.js');
const host = config.host;
const port = config.port;
const endpoint = config.domain
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

 
server.use(middlewares)
server.use(jsonServer.bodyParser)


// server.get('http://0.0.0.0:3000/api/users/me', function (req, res, next) {
server.get('/api/users/me', function (req, res, next) {
  // console.log("chegou")
  req.url = '/me'
  next()
})


server.use(router)
server.listen(config.port, () => {
  console.log(`JSON Server is running: http://localhost:${config.port}`)
})