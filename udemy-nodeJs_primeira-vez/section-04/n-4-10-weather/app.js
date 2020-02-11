// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// 4a04d1c42fd9d32c97a2c291a32d5e2d   //do instrutor

// cc34738f9a2b89151c78a6239b65d81a   // minha

const request = require('request');

// url: 'https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/39.9396284,-75.18663959999999',
// url: 'https://api.forecast.io/forecast/cc34738f9a2b89151c78a6239b65d81a/39.9396284,-75.18663959999999',

request({
  url: 'https://api.forecast.io/forecast/cc34738f9a2b89151c78a6239b65d81a/39.9396284,-75.18663959999999',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
    console.log(response.statusCode);
  }
});
