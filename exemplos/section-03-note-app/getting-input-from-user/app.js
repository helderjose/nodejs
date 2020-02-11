
/*
execute
node app.js list
*/


var command = process.argv[2];

/*
process.argv
0 - path do node
1 - path do arquivo que statou o node  (app.js)
2 - command line arguments
*/
console.log("process.argv: ", process.argv);
console.log('Command: ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
