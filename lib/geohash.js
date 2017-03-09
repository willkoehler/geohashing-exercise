const request = require('request');
const dateFormat = require('dateformat');
const crypto = require('crypto')

const dow_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

function geoHash(lat, lon, cb) {
  var location = { lat: lat, lon: lon };
  getRandomHex(function (random_hex) {
    cb(shiftLocation(location, random_hex));
  });
}

function shiftLocation(location, random_hex) {
  var stripped_location = stripDecimals(location)
  var new_location_decimals = newDecimals(random_hex)
  return ({
    lat: parseFloat(stripped_location.lat + '.' + new_location_decimals.lat),
    lon: parseFloat(stripped_location.lon + '.' + new_location_decimals.lon)
  });
}

function stripDecimals(location) {
  return({
    lat: Math.trunc(location.lat),
    lon: Math.trunc(location.lon)
  });
}

function newDecimals(random_hex) {
  return({
    lat: parseInt(random_hex.slice(0,16), 16),
    lon: parseInt(random_hex.slice(16,32), 16)
  })
}

function getRandomHex(cb) {
  generateSeed(function(seed) {
    cb(crypto.createHash('md5').update(seed).digest("hex"));
  });
}

function generateSeed(cb) {
  request(dow_url, function (error, response, body) {
    var dow_open = JSON.parse(body).query.results.quote[0].Open;
    var date_string = dateFormat(new Date(), "yyyy-mm-dd");
    cb(date_string + '-' + dow_open);
  });
}

module.exports = geoHash;
