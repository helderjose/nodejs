// const jsonServer = require('./node_modules/.bin/json-server')
const jsonServer = require('json-server')

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
Essa versão do server funciona para get e post se comportando como get (usar post para buscar dados).
Pode mandar array, ou inteiro que está formatando.
*/


server.post('/teste/users', function (req, res, next) {
  console.log("no post");
  // console.log("req.url: ", req.url)
  // console.log("req.body: ", req.body)

  let reqUrlAux = '';
  let reqBodyKeys = Object.keys(req.body)
  let reqBodyAux = {...req.body};

  if(req.method === 'POST') {
    req.method = 'GET'
  }

  //format the url. Example: /users?id=1&id=3&id=5&name=jose&name=maria
  reqBodyKeys.forEach(reqBodyKey => {
    
    if (!Array.isArray(req.body[reqBodyKey])) {
      reqUrlAux = reqUrlAux + reqBodyKey + '=' + req.body[reqBodyKey] + '&'
    }

    if(Array.isArray(req.body[reqBodyKey])) {
      req.body[reqBodyKey].forEach(element => {
        reqUrlAux = reqUrlAux + reqBodyKey + '=' + element + '&'
      })
    }
  })

  //convert all request's body element to string. Example: from id: [ 1, 3 ] to id: [ '1', '3' ]
  Object.keys(reqBodyAux).forEach((key, index) => {
    
    if (!Array.isArray(reqBodyAux[key])) {
      reqBodyAux[key] = reqBodyAux[key] + ''
    }

    if (Array.isArray(reqBodyAux[key])) {
      reqBodyAux[key] = reqBodyAux[key].map(element => {
        return element + ''
      })
    }
  })

    reqUrlAux = '/teste/users?' + reqUrlAux.substr(0, reqUrlAux.length -1)
    req.url = reqUrlAux
    req.query = reqBodyAux

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
// server.get('/users', function (req, res, next) {
//   console.log("no get");
//   console.log("req.url: ", req.url)
//   // console.log("req.body: ", req.body)
//   console.log("req.query: ", req.query)

//   next()
// })




server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})