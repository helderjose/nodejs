// const jsonServer = require('./node_modules/.bin/json-server')
const jsonServer = require('json-server')
const server = jsonServer.create()  // Returns an Express server
const router = jsonServer.router('db.json') // Returns an Express router
const middlewares = jsonServer.defaults() // Set default middlewares (logger, static, cors and no-cache)
 
server.use(middlewares)
server.use(jsonServer.bodyParser)

/*
http://localhost:3000/users?id=1&id=2
*/
server.get('/users', function (req, res, next) {

  router.render = (req, res) => {
    let responseData = res.locals.data;
    responseData = {"text": "sempre vai retornar isso porque editei o response"}
    res.jsonp(responseData)
  }

  next()
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})