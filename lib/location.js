const randomPair = require('./random_pair');

function Location(lat, lon) {
  this.lon = lon;
  this.lat = lat;
  self = this;
}

Location.prototype.nearby = function(cb) {
  randomPair(function (random_pair) {
    cb({
      lat: parseFloat(Math.trunc(self.lat) + '.' + random_pair[0]),
      lon: parseFloat(Math.trunc(self.lon) + '.' + random_pair[1])
    });
  });
}

module.exports = Location;
