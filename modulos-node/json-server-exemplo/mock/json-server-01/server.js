// const jsonServer = require('./node_modules/.bin/json-server')
const jsonServer = require('json-server')
const server = jsonServer.create()  // Returns an Express server
const router = jsonServer.router('db.json') // Returns an Express router

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults()
// const middlewares = jsonServer.defaults(['id name'])
 
server.use(middlewares)
server.use(jsonServer.bodyParser)


/*
http://localhost:3000/users/3
http://localhost:3000/users?name=Jose
http://localhost:3000/users?id=3&name=Jose
http://localhost:3000/users?id=2&id=4

Exemplos exibindo a query da requisição get:
http://localhost:3000/users?id=6&id=7
req.query:  { id: [ '6', '7' ] }

http://localhost:3000/users?id=6&id=7&name=elaine
req.query:  { id: [ '6', '7' ], name: 'elaine' }
*/
server.get('/users', function (req, res, next) {
  console.log("no get");
  console.log("req.url: ", req.url)
  console.log("req.body: ", req.body)
  console.log("req.query: ", req.query)

  next() //continue to JSON Server router
})



/*
  chame no postman
  POST
  http://localhost:3000/users/
  {
    "name": "elaine"
  }
 */
server.post('/users', function (req, res, next) {
  console.log("lorem ipsun");
  next() //continue to JSON Server router
})



server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})