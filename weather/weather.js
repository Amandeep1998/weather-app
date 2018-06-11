const request = require('request');

var geoWeather = (lat, long, callback) => {
  request({
    url : `https://api.darksky.net/forecast/0199abd06476329d718bed3eac5e325a/${lat},${long}`,
    json : true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(true, {
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature,
        summary : body.currently.summary
      })
    } else {
      console.log(error);
      callback(false, `Unable to fetch weather`);
    }
  });
}

module.exports = {
  geoWeather
}
