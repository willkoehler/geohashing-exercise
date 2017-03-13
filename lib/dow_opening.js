const request = require('request');
const dow_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

function dowOpening(cb) {
  request(dow_url, function (error, response, body) {
    cb(JSON.parse(body).query.results.quote[0].Open);
  });
};

module.exports = dowOpening;
