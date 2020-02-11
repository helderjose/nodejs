const request = require('request');

// do instrutor
// url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,

// meu
// url: `https://api.forecast.io/forecast/cc34738f9a2b89151c78a6239b65d81a/${lat},${lng}`,

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/cc34738f9a2b89151c78a6239b65d81a/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
