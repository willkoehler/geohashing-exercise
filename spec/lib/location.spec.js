describe("Location", function() {

  describe("#nearby", function() {

    it("chooses a nearby location", function() {
      // Arrange
      var randomPair = td.replace('../../lib/random_pair'),
          Location = require('../../lib/location'),
          current_location = { lat: 100, lon: 200 },
          expected_nearby_location = {lat: 100.11, lon: 200.22},
          subject = new Location(current_location.lat, current_location.lon),
          // Q: Not sure this is a good practice?
          actual_nearby_location = {},
          cb = function(location) { actual_nearby_location = location };

      td.when(randomPair()).thenCallback([11, 22]);  // Arrange?

      subject.nearby(cb);  // Act

      expect(actual_nearby_location).toEqual(expected_nearby_location);   // Assert
    });

  });
});
