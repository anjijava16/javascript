var assert = chai.assert;

describe('root', function() {
  describe('inner-1', function () {
//    before(function () {
//      console.log('before is called');
//    });
//    after(function () {
//      console.log('after is called');
//    });
//    beforeEach(function () {
//      console.log('  beforeEach is called');
//    });
//    afterEach(function () {
//      console.log('  afterEach is called');
//    });
    it('should do a synchronous test', function () {
      assert.ok(true);
    });
    it('should do an asynchronous test', function (done) {
      setTimeout(function () {
        assert.ok(true);
        done();
      }, 15);
    });
  });
  describe('inner-2', function () {
    it('should do a synchronous test', function () {
      var calc = new App.Calc();
      var result = calc.add(1, 2);
      console.log(result);
      assert.equal(result, 3);
    });
  });
});
