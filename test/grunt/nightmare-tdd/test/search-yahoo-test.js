var Nightmare = require('nightmare');
var assert = require('chai').assert;

suite('search yahoo', function () {
  // increase test timeout to run test
  this.timeout(15000);
  test("should not have error", function (done) {
    new Nightmare()
      .goto('http://yahoo.com')
      .type('input[title="Search"]', 'github nightmare')
      .click('.searchsubmit')
      .run(function (err, nightmare) {
        if (err) assert.fail(err);
        done();
      });
  });
});

