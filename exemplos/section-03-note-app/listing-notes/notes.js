
const fs = require('fs');



var getAll = () => {
  return fetchNotes();
};



// para baixo é dos exemplos anteriores

//lê o JSON do arquivo, filtra pelo título e retorna a note.
var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

// get the notes
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []; //se o arquivo nao existir retorna um array vazio.
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  //arrow function não precisa de { } quanto tem apenas uma instrução
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};


module.exports = {
  addNote,
  removeNote,
  getNote,
  logNote,
  getAll
};
