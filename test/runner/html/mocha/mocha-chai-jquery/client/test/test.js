var assert = chai.assert;

describe('root', function() {
  describe('inner-1', function () {
    before(function () {
      console.log('before is called');
    });
    after(function () {
      console.log('after is called');
    });
    beforeEach(function () {
      console.log('  beforeEach is called');
    });
    afterEach(function () {
      console.log('  afterEach is called');
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
        success: function(body) {
          console.log(body);
          assert.equal(body, 'home');
          done();
        }
      });
    });
  });
  describe('inner-2', function () {
    it('should do a synchronous test', function () {
      assert.ok(true);
    });
  });
});
