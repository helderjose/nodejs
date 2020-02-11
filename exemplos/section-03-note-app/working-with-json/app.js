
const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);  //converte o json para string

// cria o arquivo notes.json e escreve o json nele
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');   //lê o arquivo com o json string
var note = JSON.parse(noteString);    //converte a string lida para json

console.log(typeof note);
console.log(note.title);








// para baixo só converte o json para string e string para json

// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew","age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
