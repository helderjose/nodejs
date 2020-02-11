const jsonServer = require('json-server')
// const jsonServer = require('./node_modules/.bin/json-server')
// Returns an Express server
const server = jsonServer.create()
// Returns an Express router
const router = jsonServer.router('db.json')
// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})