var assert = require('assert');
var jsdom = require("jsdom");
var $ = require("jquery")(jsdom.jsdom().parentWindow);

describe('inner-1', function () {
  before(function () {
    console.log('before is called');
  });
  after(function () {
    console.log('after is called');
  });
  it('should do a synchronous test', function () {
    assert.ok(true);
  });
  it('should do jquery ajax test', function (done) {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/",
      headers: {
      },
      success: function (body) {
        console.log(body);
        assert.equal(body, 'home');
        done();
      }
    });
  });
});
