var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

var contatos = [
	{nome: "BRUNO Da silvA", telefone: "9999-2222", data: new Date(), id:1, operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra antonio moreira", telefone: "9999-3333", data: new Date(), id:2, operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana evangelista da silva", telefone: "9999-9999", data: new Date(), id:3, operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});


app.get('/contatos/:id', function(req, res) {    
    var path = req.path;    
    
    var contato = {};
    
    contatos.forEach(function(cont){       
        if(cont.id.toString() === path.substring(10)){                
            contato = cont;
            return cont;
        };
    });    
    res.json(contato);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
