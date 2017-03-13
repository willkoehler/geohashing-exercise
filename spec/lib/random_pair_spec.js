describe("randomPair", function() {

  // Q: How could I test with a variety of date and DOW openings without repeating
  // the entire test each time?

  it("generates a random pair of integer seeded by today's date and today's DOW opening", function() {
    // Arrange
    var dowOpening = td.replace('../../lib/dow_opening'),
        subject = require('../../lib/random_pair'),
        // Q: Not sure this is a good practice?
        actual_random_pair = [],
        cb = function(random_pair) { actual_random_pair = random_pair };
        fake_today = new Date('Jan 1, 2010'),
        fake_dow_opening = 1000,
        expected_random_pair = [15011739116560165000, 3911026796217148000];   // hard-coded from fake_today and fake_dow_opening

    spyOn(Date, 'now').andReturn(fake_today);              // Arrange?
    td.when(dowOpening()).thenCallback(fake_dow_opening);  // Arrange?

    subject(cb);  // Act

    expect(actual_random_pair).toEqual(expected_random_pair);   // Assert
  });
});
