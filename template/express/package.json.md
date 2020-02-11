```
{
    //demais propriedades do json

  "main": "src/loader.js", //arquivo que vai ser chamado quando carregar a aplicação
  "scripts": {
    "dev": "nodemon",
    "production": "pm2 start src/loader.js --name todo-app"
  }
  
  //demais propriedades do json
}
```

"production": "pm2 start src/loader.js --name todo-app"
todo-app é o nome que vai aparecer no monitor do pm2