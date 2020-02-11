https://www.npmjs.com/package/pm2
https://tableless.com.br/node-apps-pm2/
http://pm2.keymetrics.io/

Gerencia aplicação node.

# pm2
pm2 é um launcher (carrega a aplicação), faz monitoramento como uso de memória. Caso a aplicação caia por
algum motivo, uma exception que derrube a aplicação por exemplo, o
pm2 sobe a aplição novamente.
O pm2 também é indicado em produção.

# Comandos
./node_modules/.bin/pm2
pm2 start src/loader.js --name todo-app
./node_modules/.bin/pm2 status
./node_modules/.bin/pm2 monit       //monitora memória e etc
