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

