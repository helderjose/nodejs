const jsonServer = require('json-server')
// const jsonServer = require('./node_modules/.bin/json-server')
// Returns an Express server
const server = jsonServer.create()
// Returns an Express router
const router = jsonServer.router('db.json')
// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults()
// const middlewares = jsonServer.defaults(['id name'])
 
server.use(middlewares)


// transforma get em post
// server.use(jsonServer.bodyParser)
// server.use(function (req, res, next) {
//   console.log("chegou")
//   if (req.method === 'POST') {
//     console.log("no if")
//     // Converts POST to GET and move payload to query params
//     // This way it will make JSON Server that it's GET request
//     req.method = 'GET'
//     req.query = req.body
//   }
//   // Continue to JSON Server router
//   next()
// })


// server.use(jsonServer.bodyParser)
// // If you need to scope this behaviour to a particular route, use this
// server.post('/user', function (req, res, next) {
//   console.log("lorem ipsun")
//   req.method = 'GET'
//   req.query = req.body
//   next()
// })


server.use(jsonServer.bodyParser)
// If you need to scope this behaviour to a particular route, use this
/*
  chame no postman
  POST
  http://localhost:3000/user/
  {
    "name": "elaine"
  }
 */
server.post('/user', function (req, res, next) {
  console.log("lorem ipsun");

  if(req.method === 'POST') {
    req.method = 'GET'
    req.query = req.body
  }

  next()
})




server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})