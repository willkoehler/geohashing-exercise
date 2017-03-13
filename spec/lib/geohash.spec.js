describe("geoHash", function() {

  // Q: I Don't td.verify call to nearby(). I believe this would be testing "it's implemented like ..."
  // The call to nearby() is implementation. It's not a side effect (like sending an email)

  // Q: Should I test "it uses the provided location"? Seems like verifying the call to
  // new Location(lat, lon) is testing "it's implemented like ..." But I would like to know that
  // geoHash uses the location passed in.
  
  it("calls respond with a nearby location", function() {
    // Arrange
    var Location = td.replace('../../lib/location'),
        subject = require('../../lib/geohash'),
        nearby_location = {lat: 100.1, lon: 200.1},
        // Q: Not sure this is a good practice?
        actual_response = {},
        respond = function(response) { actual_response = response };

    td.when(Location.nearby()).thenCallback(nearby_location);  // Arrange?

    subject(0, 0, respond);  // Act

    expect(actual_response).toEqual({ lat: nearby_location.lat, lon: nearby_location.lon });   // Assert
  });
});
