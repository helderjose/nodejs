const config = require('./config.js');
const endpoint = config.domain
const jsonServer = require('json-server')
const server = jsonServer.create()

const router = jsonServer.router('db.json')
// const router = jsonServer.router('db-vazio.json')

const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(jsonServer.bodyParser)

// server.post('/tenda-dashboard-servicos/trafficFiles', function (req, res, next) {
//   console.log("chegouuuuuuuuuuuuuuuuuuuuuu")
//   console.log(req.url)
//   console.log(req.body)
//   next()
// })

// http://localhost:3000/tenda-dashboard-servicos/trafficFiles
server.post(`${endpoint}/trafficFiles`, function (req, res, next) {
  console.log("trafficFiles")
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

  reqUrlAux = '/trafficFiles?' + reqUrlAux.substr(0, reqUrlAux.length -1)
  req.url = reqUrlAux
  req.query = reqBodyAux
  // req.query = {"sender": "4075566"}
  // console.log("res: ", res.jsonp)
  next()
  console.log("req.url: ", req.url)
  console.log("req.query: ", req.query )
  // console.log("req.body: ", req.body)
})

// server.post('/users', function (req, res, next) {
//   let reqUrlAux = '';
//   let reqBodyKeys = Object.keys(req.body)
//   let reqBodyAux = {...req.body};

//   if(req.method === 'POST') {
//     req.method = 'GET'
//   }

//   //format the url. Example: /users?id=1&id=3&id=5&name=jose&name=maria
//   reqBodyKeys.forEach(reqBodyKey => {
    
//     if (!Array.isArray(req.body[reqBodyKey])) {
//       reqUrlAux = reqUrlAux + reqBodyKey + '=' + req.body[reqBodyKey] + '&'
//     }

//     if(Array.isArray(req.body[reqBodyKey])) {
//       req.body[reqBodyKey].forEach(element => {
//         reqUrlAux = reqUrlAux + reqBodyKey + '=' + element + '&'
//       })
//     }
//   })

//   //convert all request's body element to string. Example: from id: [ 1, 3 ] to id: [ '1', '3' ]
//   Object.keys(reqBodyAux).forEach((key, index) => {
    
//     if (!Array.isArray(reqBodyAux[key])) {
//       reqBodyAux[key] = reqBodyAux[key] + ''
//     }

//     if (Array.isArray(reqBodyAux[key])) {
//       reqBodyAux[key] = reqBodyAux[key].map(element => {
//         return element + ''
//       })
//     }
//   })

//   reqUrlAux = '/users?' + reqUrlAux.substr(0, reqUrlAux.length -1)
//   req.url = reqUrlAux
//   req.query = reqBodyAux
//   next()
// })



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
//   next()
// })

server.get(`${endpoint}/trafficFiles/file`, function (req, res, next) {
  console.log("trafficFiles/file")
  router.render = (req, res) => {
    // let responseData = res.locals.data;
    // res.jsonp(responseData.file)
    res.send(`Sender;Receiver;DocType;Tipo;Tracking ID;Tamanho (KB);Data Envio;Data Retirada;Quant. Docs;Arq. Entrada;Arq. Saida
    8490184;4900386;REDEEEFI3;EXTRATO FINANCEIRO;201903010000006;800;;01/03/2019 09:49:08;0;/data/redecard/in/EEVC.RD2ACC.3Vaccini150440.EEVC.43.4463556.TXT;
    8490184;1212320;REDEEEVD3;EXTRATO VENDAS DEBTO;201903010000008;800;;01/03/2019 09:49:08;0;/data/redecard/in/EEVC.RD2ACC.5Vaccini150442.EEVC.43.4463565.TXT;
    8490184;9126816;REDEEEVD2;EXTRATO VENDAS DEBTO;201903010000009;800;;01/03/2019 09:49:08;;/data/redecard/in/EEVC.RD2ACC.6Vaccini150443.EEVC.43.4463566.TXT;
    8490184;1007494;ASCARTCONS;CARTOES - CONSOLIDADOR;201903010000037;800;;01/03/2019 09:49:08;0;/data/redecard/in/EEVC.RD2ACC.ALEXSANDRA62735535.EEVC.43.4462658.TXT;
    8490184;6919343;REDEEEFI12;EXTRATO FINANCEIRO;201903010000014;800;;01/03/2019 09:49:08;0;/data/redecard/in/EEVC.RD2ACC.ABSUPERM12869724.EEVC.43.4461618.TXT;
    8490184;1075022;ASCARTCONS;CARTOES - CONSOLIDADOR;201903010000022;800;;01/03/2019 09:49:08;0;/data/redecard/in/EEVC.RD2ACC.ADRIANO154243.EEVC.43.4464148.TXT;
    8490184;6919343;REDEEEFI21;EXTRATO FINANCEIRO;201903010000039;800;;01/03/2019 09:49:13;;/data/redecard/in/EEVC.RD2ACC.ALLPAGO126956.EEVC.43.4459206.TXT;
    8490184;6919343;REDEEEVC38;EXTRATO VENDAS;201903010000010;800;;01/03/2019 09:49:13;;/data/redecard/in/EEVC.RD2ACC.ABCATACBRAS.EEVC.43.4457591.TXT;
    8490184;6919343;REDEEEVD51;EXTRATO VENDAS DEBTO;201903010000004;800;;01/03/2019 09:49:13;;/data/redecard/in/EEVC.RD2ACC.4Vaccini150441.EEVC.43.4463558.TXT;
    8490184;1137910;REDEEEVC;EXTRATO VENDAS;201903010000011;800;;01/03/2019 09:49:13;;/data/redecard/in/EEVC.RD2ACC.7Vaccini150444.EEVC.43.4463567.TXT;
    8490184;6919343;REDEEEVC2;EXTRATO VENDAS;201903010000002;800;;01/03/2019 09:49:13;;/data/redecard/in/EEVC.RD2ACC.2Vaccini150439.EEVC.43.4463555.TXT;
    8490184;6919343;REDEEEVC5;EXTRATO VENDAS;201903010000015;800;;01/03/2019 09:49:14;;/data/redecard/in/EEVC.RD2ACC.ACADEMIA153601.EEVC.43.4464110.TXT;
    8490184;1485084;REDEEEVD;EXTRATO VENDAS DEBTO;201903010000019;800;;01/03/2019 09:49:14;;/data/redecard/in/EEVC.RD2ACC.ADEGA17950660.EEVC.43.4462216.TXT;`)
    // res.status(500)
  }
  // res.status(200)
  res.statusCode = 200
  // res.header('Content-Type', 'blob')

  next()
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running: http://localhost:3000')
})

