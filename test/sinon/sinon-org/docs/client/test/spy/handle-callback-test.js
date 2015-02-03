var assert = require('assert');
var sinon = require('sinon');
var PubSub = require('pubsub-js');

describe('spy handle callback', function() {
  it('PubSub test should call subscribers on publish', function() {
    var callback = sinon.spy();
    PubSub.subscribe("message", callback);

    PubSub.publishSync("message");

    assert(callback.called);
  });
});
