var assert = require('assert');
var sinon = require('sinon');

describe('#test publisher and subscriber', function () {
  function Publisher() {
    this.handlers = [];
  }

  Publisher.prototype = {
    subscribe: function (fn) {
      this.handlers.push(fn);
    },
    publish: function (msg, data) {
      this.handlers.forEach(function (item) {
        try {
          item(msg, data);
        }
        catch (e) {
          console.log('publish caught: ' + e);
        }
      })
    }
  }
  function Subscriber() {
  }

  Subscriber.prototype = {
    // onPublish() is a long run method that need to be replaced when testing subject
    onPublish: function (msg, data) {
      console.log(msg + ': publish "' + data + '"');
      if (msg === 'error') {
        console.log('Subscriber.onPublish() throw');
        throw new Error('"error" message reports error');
      }
      else {
        console.log('Subscriber.onPublish() returns ' + data);
        return data;
      }
    }
  }

  describe('product code', function () {
    it('throw: compare arguments in subscriber.onPublish()', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // product code
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('error', 'error occurs');
    });
    it('return: compare arguments in subscriber.onPublish()', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // product code
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('weather', 'sunny');
    });
  });
  // mock: pre-programmed behavior (like stubs) as well as pre-programmed expectations
  describe('mock tests', function () {
    // sandbox mock does not need this.mock.verify()
    it('sandbox FAIL EXPECTED: subscriber.onPublish("error_x") is never called', sinon.test(function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // mock subscriber that is product code
      this.mock(subscriber).expects('onPublish').withArgs('error_x').throws();
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('error', 'error occurs');
    }));
    it('FAIL EXPECTED: subscriber.onPublish("error_x") is never called', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // mock subscriber that is product code
      var mock = sinon.mock(subscriber);
      mock.expects('onPublish').withArgs('error_x').throws();
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('error', 'error occurs');
      mock.verify();   // must use mock.verify() to verify mock expectation
    });
    it('throws error when arg1="error"', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // mock subscriber that is product code
      var mock = sinon.mock(subscriber);
      mock.expects('onPublish').withArgs('error').throws(); // mock record, return/throw, set expectation on method and verify later
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('error', 'error occurs');
      mock.verify();  // assert here, fail when expectation is not met
    });
    it('return data when arg1!="error"', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // mock subscriber that is product code
      var mock = sinon.mock(subscriber);
      mock.expects('onPublish').withArgs('weather').returns('sunny'); // mock record, return/throw, set expectation on method and verify later
      publisher.subscribe(subscriber.onPublish);
      publisher.publish('weather', 'sunny');
      mock.verify();  // assert here, fail when expectation is not met
    });
  });
  // stub: pre-programmed behavior
  describe('stub tests', function () {
    it('throws error when arg1="error"', function () {
      var publisher = new Publisher();
      // use stub that throws when arg1='error' to replace the long run method above subscriber.onPublish() for testing
      var stub = sinon.stub();
      stub.withArgs('error')
        .throws(new Error('"error" message reports error')); // stub record, return/throw
      publisher.subscribe(stub);
      publisher.publish('error', 'error occurs');
      assert(stub.called);
      assert(stub.calledWith('error', 'error occurs'));
    });
    it('return data when arg1!="error"', function () {
      var publisher = new Publisher();
      // use stub that throws when arg1='error' to replace the long run method above subscriber.onPublish() for testing
      var stub = sinon.stub();
      stub.withArgs('weather').returns('sunny'); // stub record, return/throw
      publisher.subscribe(stub);
      publisher.publish('weather', 'sunny');
      assert(stub.called);
      assert(stub.calledWith('weather', 'sunny'));
      assert(stub.returned('sunny'));
      console.log(stub.returnValues);
    });
  });
  // spy: records arguments, return value, the value of this and exception thrown (if any) for all its calls
  it('spy: records arguments and called', function () {
    var publisher = new Publisher();
    var spy = sinon.spy();
    publisher.subscribe(spy);  // spy just record
    publisher.publish('error', 'error occurs');
    assert(spy.called);
    assert(spy.withArgs('error').calledOnce);
  });
});
