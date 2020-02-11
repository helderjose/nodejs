
const fs = require('fs');


var removeNote = (title) => {
  var notes = fetchNotes();
  //arrow function não precisa de { } quanto tem apenas uma instrução
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};




// para baixo é do exemplo anterior.

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


module.exports = {
  addNote,
  removeNote
};
