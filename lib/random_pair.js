const dateFormat = require('dateformat');
const crypto = require('crypto');
const dowOpening = require('./dow_opening');

function randomPair(cb) {
  randomHex(function(random_hex) {
    cb([
      parseInt(random_hex.slice(0,16), 16),
      parseInt(random_hex.slice(16,32), 16)
    ]);
  });
};

function randomHex(cb) {
  generateSeed(function(seed) {
    cb(crypto.createHash('md5').update(seed).digest("hex"));
  });
};

function generateSeed(cb) {
  dowOpening(function (dow_opening) {
    cb(dateFormat(Date.now(), "yyyy-mm-dd") + '-' + dow_opening);
  });
};

module.exports = randomPair;
