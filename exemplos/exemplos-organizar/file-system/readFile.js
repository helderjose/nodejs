/*
https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
https://www.w3schools.com/nodejs/nodejs_filesystem.asp


If no encoding is specified, then the raw buffer is returned.
fs.readFile('./my-file.txt', (err, data) => {


If options is a string, then it specifies the encoding:
fs.readFile('./my-file.txt', 'utf8', (err, data) => {
*/

const fs = require('fs')

// fs.readFile('./my-file.txt', (err, data) => {
fs.readFile('./my-file.txt', 'utf8', (err, data) => {

  if (err) {
    console.error(err)
    return
  }

  console.log(data)
})