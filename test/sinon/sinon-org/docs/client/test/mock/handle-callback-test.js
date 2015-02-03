var assert = require('assert');
var sinon = require('sinon');
var PubSub = require('pubsub-js');

describe('mock handle callback', function() {
  it('PubSub test should call all subscribers when exceptions', function () {

    var myAPI = { method: function () {
    } };

    var spy = sinon.spy();
    var mock = sinon.mock(myAPI);
    mock.expects("method").once();
    PubSub.subscribe("message", myAPI.method);
    PubSub.subscribe("message", spy);
    PubSub.publishSync("message", undefined);

    mock.verify();
    assert(spy.calledOnce);
  });
});
