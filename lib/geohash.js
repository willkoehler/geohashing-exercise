const Location = require('./location');
const Randomizer = require('./randomizer');

function geoHash(lat, lon, cb) {
  var location = new Location(lat, lon);
  Randomizer.randomPair(function (random_pair) {
    cb(location.nearby(random_pair));
  });
}

module.exports = geoHash;
