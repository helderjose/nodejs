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
  Faça a chamada abaixo no postman, vai retornar todas as elaines
  Method: POST
  http://localhost:3000/users/
  {
    "name": "elaine"
  }
 */
server.post('/users', function (req, res, next) {
  console.log("no post");
  console.log("req.url: ", req.url)
  console.log("req.body: ", req.body)

  if(req.method === 'POST') {
    req.method = 'GET'
    let reqQuery = {};
    let reqBodyKeys = Object.keys(req.body)
    console.log("reqBodyKeys: ", reqBodyKeys)
    
    /*
    esse bloco funciona para as seguintes chamadas POST
    { "id": "6" } e { "name": "elaine" } e { "id": "6", "name": "elaine" }
    */
    if (reqBodyKeys.length === 1) {
      if (reqBodyKeys[0] === 'id') {
        req.url = `/users/${req.body.id}`
      } else {
        req.url = `/users?name=${req.body.name}`
        req.query = { "name": req.body.name }
      }
    } else {
      req.url = `/users?id=${req.body.id}&name=${req.body.name}`
      req.query = req.body; //tem que passar todas as keys do json como string para funcionar.
    }
    
  }

  console.log("req.body: ", req.body)
  console.log("req.query: ", req.query)
  console.log("req.url: ", req.url)

  next()
})



//já tem um exemplo de filtro usando em um exemplo anterior. Pesquise por "filter".
/*
http://localhost:3000/users/3

http://localhost:3000/users?name=Jose
req.url:  /users?name=Jose
req.query:  { name: 'Jose' }

http://localhost:3000/users?id=3&name=Jose
req.url:  /users?id=3&name=elaine
req.query:  { id: '3', name: 'Jose' }

http://localhost:3000/users?id=6&id=7
req.query:  { id: [ '6', '7' ] }

http://localhost:3000/users?id=6&id=7&name=elaine
req.query:  { id: [ '6', '7' ], name: 'elaine' }
*/
server.get('/users', function (req, res, next) {
  console.log("no get");
  console.log("req.url: ", req.url)
  // console.log("req.body: ", req.body)
  console.log("req.query: ", req.query)

  next()
})




server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})