var Nightmare = require('nightmare');
var assert = require('chai').assert;

suite('extract content', function () {
  suite('extract kayak.com content', function () {
    // increase test timeout to run test
    this.timeout(15000);
    test("should be a Find Flights button", function (done) {
      new Nightmare()
        .goto('http://www.kayak.com')
        .evaluate(function (page) {
          return document.documentElement.innerHTML;
        }, function (res) {
          assert.include(res, '<span>Find Flights</span>', 'contains <span>Find Flights</span>');
          done();
        })
        .run();
    });
  });
});

