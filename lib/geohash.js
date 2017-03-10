const Location = require('./location');
const Randomizer = require('./randomizer');

function geoHash(lat, lon, cb) {
  var location = new Location(lat, lon);
  Randomizer.randomHex(function (random_hex) {
    cb(location.nearby(random_hex));
  });
}

module.exports = geoHash;
