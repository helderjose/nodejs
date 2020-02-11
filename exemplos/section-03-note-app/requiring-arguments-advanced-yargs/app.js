const yargs = require('yargs');

const notes = require('./notes.js');

//----- conteúdo desse exemplo -----

//usado quando passa --help
//alias: 't' para usar -t no comando
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

//usado quando passa --help
//alias: 'b' para usar -b no comando
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

//usado quando passa --help
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

  //----- fim conteúdo desse exemplo -----



  /// para baixo é dos outros exemplos
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}