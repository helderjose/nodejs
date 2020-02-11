
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  notes.addNote(argv.title, argv.body); // grava o arquivo
} else {
  console.log('Command not recognized');
}
