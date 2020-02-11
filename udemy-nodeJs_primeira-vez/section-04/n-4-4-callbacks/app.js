const request = require('request'); //mesmo nome do package.json

// request({}, callback-function)
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(body);
});
