console.log('Starting app.');

const fs = require('fs'); // https://nodejs.org/api/fs.html   fs = file system
const os = require('os'); // https://nodejs.org/api/os.html   os = operating system

var user = os.userInfo();

// \n = new line

//original line
fs.appendFile('greetings.txt', `Hello world original line!\n`);


// Optional one
fs.appendFile('greetings.txt', `Hello ${user.username} - optional line!\n`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});


// Option two
fs.appendFileSync('greetings.txt', `Hello world! with File Sync! - option two\n`);
