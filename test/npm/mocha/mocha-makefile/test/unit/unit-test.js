var assert = require('assert');

describe('unit', function() {
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
    it('unit: should do an asynchronous test', function (done) {
      setTimeout(function () {
        assert.ok(true);
        done();
      }, 15);
    });
  });
  describe('inner-2', function () {
    it('unit: should do a synchronous test', function () {
      assert.ok(true);
    });
  });
});
