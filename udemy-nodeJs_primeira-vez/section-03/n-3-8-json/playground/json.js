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

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);  //converte o json para string
fs.writeFileSync('notes.json', originalNoteString);   //escreve o json string no arquivo txt

var noteString = fs.readFileSync('notes.json');   //lê o arquivo com o json string
var note = JSON.parse(noteString);    //converte a string lida para json
console.log(typeof note);
console.log(note.title);
