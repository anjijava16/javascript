var Nightmare = require('nightmare');
var assert = require('chai').assert;

describe('extract content', function () {
  describe('extract kayak.com content', function () {
    // increase test timeout to run test
    this.timeout(15000);
    it("should be a Find Flights button", function (done) {
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

