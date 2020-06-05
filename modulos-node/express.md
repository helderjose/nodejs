# express
https://expressjs.com/pt-br/

Framework web para Nodejs e criação de APIs.

# Teoria
require('express') sempre retorna o mesmo objeto, é um singleton, ex:
const express = require('express')
const express2 = require('express')
As duas chamadas acima retornam o mesmo objeto.


express() sempre retorna um novo objeto.
const server = express()



Use o body-parser para pegar dados de requisição post.
Exemplo sem body-parser:
app.post('/demo-post', (req, res) => {

  const body = [];

  req.on("data", (chunck) => {
    body.push(chunck)
  })

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
  });
});

