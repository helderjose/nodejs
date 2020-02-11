console.log('Starting app.js...');


const notes = require('./notes.js');

console.log("age: ", notes.age); // 25
console.log("newNote: ", notes.addNote()); // New note
console.log(notes.add(9, -2)); // 7