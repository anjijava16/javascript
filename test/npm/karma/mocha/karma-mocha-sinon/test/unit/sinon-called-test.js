var assert = chai.assert;

describe('sinon tests', function () {
  it('calls the original function', function() {
    console.log('sinon test');

    var callback = sinon.spy();
    var proxy = once(callback);
    proxy();
    assert(callback.called);
    assert.equal(callback.callCount, 1);
  });
});