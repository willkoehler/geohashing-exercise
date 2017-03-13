describe("dowOpening", function() {

  // Q: stub at different level? ex: JSON.parse(body) instead of request?

  it("gets today's DOW opening value", function() {
    // Arrange
    var request = td.replace('request'),
        subject = require('../../lib/dow_opening'),
        dow_opening = 1000,
        fake_dow_response = { query: { results: { quote: [{Open: dow_opening}]} } },
        // Q: Not sure this is a good practice?
        actual_dow_opening = null,
        cb = function(dow_opening) { actual_dow_opening = dow_opening };

    td.when(request(td.matchers.anything())).thenCallback(null, null, JSON.stringify(fake_dow_response));  // Arrange?

    console.log(subject);
    subject(cb);  // Act

    expect(actual_dow_opening).toEqual(dow_opening);   // Assert
  });
});
