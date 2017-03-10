const request = require('request');
const dateFormat = require('dateformat');
const crypto = require('crypto')

const dow_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

function Randomizer() {}

Randomizer.randomPair = function(cb) {
  this.randomHex(function(random_hex) {
    cb([
      parseInt(random_hex.slice(0,16), 16),
      parseInt(random_hex.slice(16,32), 16)
    ]);
  });
}

// Is there a way to make these private?
Randomizer.randomHex = function(cb) {
  this.generateSeed(function(seed) {
    cb(crypto.createHash('md5').update(seed).digest("hex"));
  });
}

Randomizer.generateSeed = function(cb) {
  request(dow_url, function (error, response, body) {
    var dow_open = JSON.parse(body).query.results.quote[0].Open;
    var date_string = dateFormat(new Date(), "yyyy-mm-dd");
    cb(date_string + '-' + dow_open);
  });
}

module.exports = Randomizer;
