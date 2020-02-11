
const fs = require('fs');


/*
No próximo exemplo o código será refatorado
para reusabilidade
*/
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json'); //lê o arquivo
    notes = JSON.parse(notesString); //converte a string para array
  } catch (e) {
    /*
    quando o arquivo "notes-data.json" não existir vai entrar aqui,
    mas depois vai ser criado no if
    */
  }

  //pode usar o notes.some
  var duplicateNotes = notes.filter((note) => note.title === title);  //vê se a nota é duplicada (mesmo título)

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};


module.exports = {
  addNote
};
