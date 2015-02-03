var assert = require('assert');
var sinon = require('sinon');
// commands are setters are tested using mocks
describe('#mock tests', function () {
  it('create new test callback: compare arguments', function (done) {
    var subject = {
      handlers: [],
      subscribe: function (fn) {
        this.handlers.push(fn);
      },
      publish: function (msg, data) {
        this.handlers.forEach(function (item) {
          item(msg, data);
        })
      }
    }
    var message = 'weather';
    var data = 'sunny tomorrow!';

    // ** create a new test callback method without using mock
    var subscriber = {
      callback: function (msg, data) {
        console.log(msg + ': publish "' + data + '"');
        assert.equal(msg, message);
        done();
      }
    }

    subject.subscribe(subscriber.callback);
    subject.publish(message, data);
  });
  it('test should call all subscribers when exceptions', function () {
    var subject = {
      handlers: [],
      subscribe: function (fn) {
        this.handlers.push(fn);
      },
      publish: function (msg, data) {
        this.handlers.forEach(function (item) {
          item(msg, data);
        })
      }}
    var message = 'weather';
    var data = 'sunny tomorrow!';
    var subscriber = {
      callback: function (msg, data) {
        console.log('subscriber.');
      }
    }
    var spy = sinon.spy();
    var mock = sinon.mock(subscriber);
    mock.expects("callback").once();
    subject.subscribe(subscriber.callback);
    subject.subscribe(spy);
    subject.publish(message, data);
    mock.verify();
    assert(spy.calledOnce);
  });
});

