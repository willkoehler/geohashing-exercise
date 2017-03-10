function Location(lat, lon) {
  
  var _lon = lon;
  var _lat = lat;
  
  var nearby = function(random_pair) {
    return ({
      lat: parseFloat(strippedLocation().lat + '.' + random_pair[0]),
      lon: parseFloat(strippedLocation().lon + '.' + random_pair[1])
    });
  }
  
  // private
  
  var strippedLocation = function() {
    return({
      lat: Math.trunc(_lat),
      lon: Math.trunc(_lon)
    });
  }

  // public API
  this.nearby = nearby;
}

module.exports = Location;
