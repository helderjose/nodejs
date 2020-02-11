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




server.use(jsonServer.bodyParser)


/*
Essa versão do server funciona para get e post se comportando como get (usar post para buscar dados)
*/


server.post('/users', function (req, res, next) {
  console.log("no post");
  // console.log("req.url: ", req.url)
  // console.log("req.body: ", req.body)

  if(req.method === 'POST') {
    req.method = 'GET'
    let reqUrlAux = '';
    let reqBodyKeys = Object.keys(req.body)
    console.log("reqBodyKeys: ", reqBodyKeys)

    if (reqBodyKeys.length === 1 && isNaN(reqBodyKeys[0])) {
      req.url = `/users/${req.body[reqBodyKeys[0]]}`
    } else {
      
      reqBodyKeys.forEach((reqBodyKey, index) => {
        if (index === 0) {
          reqUrlAux = reqUrlAux + reqBodyKey + '=' + req.body[reqBodyKey]
        } else {
          reqUrlAux = reqUrlAux + '&' + reqBodyKey + '=' + req.body[reqBodyKey]
        }
        
      });

      reqUrlAux = '/users?' + reqUrlAux
      req.url = reqUrlAux
      req.query = req.body
    }
    // req.url = `/users/id=${req.body.id}`
    // req.query = req.body
    
    /*
    esse bloco funciona para as seguintes chamadas POST
    { "id": "6" } e { "name": "elaine" } e { "id": "6", "name": "elaine" }
    */
    // if (reqBodyKeys.length === 1) {
    //   if (reqBodyKeys[0] === 'id') {
    //     req.url = `/users/${req.body.id}`
    //   } else {
    //     req.url = `/users?name=${req.body.name}`
    //     req.query = { "name": req.body.name }
    //   }
    // } else {
    //   req.url = `/users?id=${req.body.id}&name=${req.body.name}`
    //   req.query = req.body; //tem que passar todas as keys do json como string para funcionar.
    // }
    
  }

  console.log("req.url: ", req.url)
  console.log("req.body: ", req.body)
  console.log("req.query: ", req.query)
  

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