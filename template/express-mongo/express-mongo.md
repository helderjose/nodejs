# Template
Servidor http com express e banco de dados mongoDB usando mongoose.
API de todo com alguns verbos http.
Sem habilitar o cors.

# Observação
Esse exemplo ainda não é possível consumir o serviço porque as rotas
ainda não estão visíveis


# Executar o server
## Inicie o mongoDB
cd /opt/mongodb-linux-x86_64-rhel70-3.6.5/bin && ./mongod --dbpath ~/mongo-data

## Inicie o nodeJS
npm run dev
npm run production
http://localhost:3003/api/todos

## Abra o Postman


# src/api/todo/todo.js
Faz o mapeamento JSON x documento mongoDB usando mongoose

# src/api/todo/todoService.js
Usa o todo.js e cria a API

# src/config/routes.js
Cria as rotas para o serviço criado. no todoService.js

# src/config/cors
- configuração do cors
- src/config/server.js (adiciona o cors)


# Criar Projeto Novo
## Ferramentas
Instale e inicie o mongoDB (olhar pasta do mongoDB)

## Dependências
npm init -y
npm i --save-dev body-parser@1.15.2
npm i --save-dev express@4.14.0
npm i --save-dev mongoose@4.7.0
npm i --save-dev node-restful@0.2.5
npm i --save-dev pm2@2.1.5
npm i --save-dev nodemon@1.11.0
