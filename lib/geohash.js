const request = require('request');
var dateFormat = require('dateformat');
var crypto = require('crypto')

const dow_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

function geoHash(lat, lon, cb) {
  request(dow_url, function (error, response, body) {
    var dow_open = JSON.parse(body).query.results.quote[0].Open;
    var date_string = dateFormat(new Date(), "yyyy-mm-dd");
    var seed = date_string + '-' + dow_open;
    var md5 = crypto.createHash('md5').update(seed).digest("hex");
    var latitude_decimal = parseInt(md5.slice(0,16), 16);
    var longitude_decimal = parseInt(md5.slice(16,32), 16);
    var latitude_integer = Math.trunc(lat)
    var longitude_integer = Math.trunc(lon)
    var response = {
      lat: parseFloat(latitude_integer + '.' + latitude_decimal),
      lon: parseFloat(longitude_integer + '.' + longitude_decimal)
    }
    cb(response);
  });
}

module.exports = geoHash;
