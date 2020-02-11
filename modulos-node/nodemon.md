https://www.npmjs.com/package/nodemon
https://nodemon.io/

# nodemon
automatically restarting the node application when file changes in the directory are detected.
Igual o pm2, só que o nodemon é menos robusto, indicado para usar em dev.
Para usar em produção use o pm2 e não o nodemon.

# Uso
Com um servidor node inicializado usando o nodemon, é possível executar alguns comando.
rs -> restart sem precisar usar ctrl + c no terminal.



# Dicas
Executar sem global
./node_modules/nodemon/bin/nodemon.js server.js