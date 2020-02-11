# Rodar o Projeto
npm install json-server
node ./server.js  //execute dentro da pasta do projeto porque se usar o path do arquivo dá 404.


# Testes Filtro (Filter)
## GET
http://localhost:3000/users/3
http://localhost:3000/users?name=Jose
http://localhost:3000/users?id=3&name=Jose
http://localhost:3000/users?id=2&id=4


## POST
Post: chame no postman
http://localhost:3000/users
{
	"name": "Jose"
}