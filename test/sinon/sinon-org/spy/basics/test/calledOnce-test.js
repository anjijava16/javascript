var assert = require('assert');
var sinon = require('sinon');
var once = require('../src/once.js');

describe('sinon example', function() {
  it('calls the original function only once', function() {
    var callback = sinon.spy();
    var proxy = once(callback);

    proxy();
    proxy();

    assert(callback.calledOnce);
    assert.equal(callback.callCount, 1);
  });
});
