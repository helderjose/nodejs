console.log('Starting app...');

const fs = require('fs'); // https://nodejs.org/api/fs.html   fs = file system
const os = require('os'); // https://nodejs.org/api/os.html   os = operating system

// informações do usuário logado no sistema operacional.
var user = os.userInfo(); // https://nodejs.org/api/os.html#os_os_userinfo_options

// \n = new line

//cria um arquivo e escreve nele.
fs.appendFile('greetings.txt', `1 - Hello world!\n`);


// Adiciona texto no arquivo existente.
fs.appendFile('greetings.txt', `2 - Hello ${user.username}!\n`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});


// Adiciona texto no arquivo existente usando FileSync
fs.appendFileSync('greetings.txt', `3 - Hello world! with File Sync!\n`);

/*
A escrita do arquivo será
3 - Hello ...
1 - Hello ...
2 - Hello ...
*/
