/*
https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback
https://www.w3schools.com/nodejs/nodejs_filesystem.asp

Asynchronously append data to a file, creating the file if
it does not yet exist. data can be a string or a Buffer.

*/
const fs = require('fs');

fs.appendFile('/tmp/message.txt', 'data to append', 'utf8', (err) => {
// fs.appendFile('/tmp/message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});