var assert = require('assert');
var sinon = require('sinon');
var once = require('../src/once.js');

describe('sinon example', function() {
  it('calls original function with this object and args', function() {
    var callback = sinon.spy();
    var proxy = once(callback);
    var obj = {};

    proxy.call(obj, 1, 2, 3);

    assert(callback.calledOn(obj));
    assert(callback.calledWith(1, 2, 3));
  });
});
