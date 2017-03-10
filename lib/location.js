function Location(lat, lon) {
  
  var _lon = lon;
  var _lat = lat;
  
  var nearby = function(random_hex) {
    var new_location_decimals = newDecimals(random_hex)
    return ({
      lat: parseFloat(strippedLocation().lat + '.' + new_location_decimals.lat),
      lon: parseFloat(strippedLocation().lon + '.' + new_location_decimals.lon)
    });
  }
  
  // private
  
  var strippedLocation = function() {
    return({
      lat: Math.trunc(_lat),
      lon: Math.trunc(_lon)
    });
  }

  function newDecimals(random_hex) {
    return({
      lat: parseInt(random_hex.slice(0,16), 16),
      lon: parseInt(random_hex.slice(16,32), 16)
    })
  }
  
  // public API
  this.nearby = nearby;
}

module.exports = Location;
