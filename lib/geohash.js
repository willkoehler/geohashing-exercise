const Location = require('./location');

function geoHash(lat, lon, cb) {
  var location = new Location(lat, lon);
  location.nearby(function(new_location) {
    cb({
      lat: new_location.lat,
      lon: new_location.lon
    });
  });
}

module.exports = geoHash;
