const express = require('express'); //load the express

var app = express();

/*
req = request
res = response
*/
app.get('/', (req, res) => {
  console.log("headers ", req.headers)
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.post('/test', (req, res) => {
  console.log("no post")
  console.log("headers ", req.headers)
  res.send('NO POST');
});

app.listen(3000); //localhost:3000
