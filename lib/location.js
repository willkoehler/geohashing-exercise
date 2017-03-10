const Randomizer = require('./randomizer');

function Location(lat, lon) {
  
  var _lon = lon;
  var _lat = lat;
  
  var nearby = function(cb) {
    Randomizer.randomPair(function (random_pair) {
      cb({
        lat: parseFloat(Math.trunc(_lat) + '.' + random_pair[0]),
        lon: parseFloat(Math.trunc(_lon) + '.' + random_pair[1])
      });
    });
  }
  
  // private
  // (nothing here any more)
  
  // public API
  this.nearby = nearby;
}

module.exports = Location;
