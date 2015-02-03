var assert = require('assert');
var sinon = require('sinon');
var once = require('../src/once.js');

describe('sinon example', function() {
  it('calls the original function', function() {
    var callback = sinon.spy();
    var proxy = once(callback);
    proxy();
    assert(callback.called);
  });
});
