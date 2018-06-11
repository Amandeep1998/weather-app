const yargs = require("yargs");

const weather = require("./weather/weather.js")
const geocode = require("./geocode/geocode.js")

const argv = yargs
  .options({
    a : {
      describe : 'Address to fetch',
      alias : 'address',
      string : true,
      demand : true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(result.address);

      weather.geoWeather(result.lattitude, result.longitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
          console.log(JSON.stringify(weatherResults, null, 2));
        } else {
          console.log(weatherResults);
        }
      });
    }
  });
