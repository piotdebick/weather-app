const request = require('request');

const secret_keys = require('../secret_keys/secret_keys');
/**** REMEMBER TO INPUT YOUR API KEY IN ./secret_keys/secret_keys.js ****/
var key = secret_keys.getSecretKey();

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
}

module.exports = {
  getWeather
}
