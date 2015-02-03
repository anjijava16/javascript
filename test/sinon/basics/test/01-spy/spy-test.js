var assert = require('assert');
var sinon = require('sinon');

describe('#spy tests', function () {

  it('use spy as callback: records arguments', function () {
    var subject = {
      subscribe: function (fn) {
        this.fn = fn;
      },
      publish: function (msg, data) {
        this.fn(msg, data);
      }
    }

    var message = 'weather news';

    // ** use spy without creating a new test callback method
    var spy = sinon.spy();

    subject.subscribe(spy);
    subject.publish(message, 'sunny tomorrow!');

    assert(spy.calledWith(message));
  });

  it('create new test callback: compare arguments', function (done) {
    var subject = {
      handlers: [],
      subscribe: function (fn) {
        this.handlers.push(fn);
      },
      publish: function (msg, data) {
        this.handlers.forEach(function(item){
          item(msg, data);
        })
      }
    }

    var message = 'weather news';

    // ** create a new test callback method without using spy
    var subscriber = function (msg, data) {
      console.log(msg + ': publish "' + data + '"');
      assert.equal(msg, message);
      done();
    };

    subject.subscribe(subscriber);
    subject.publish(message, 'sunny tomorrow!');
  });

  it('method: records method invoke spy()', function () {
    function hello() {
      console.log('hello, records method invoke spy()');
    }

    var spy = sinon.spy(hello);

    spy();
    assert(spy.called);
  });

  it('method: records method invoke method()', function () {
    function hello() {
      console.log('hello, records method invoke method()');
    }

    var spy = sinon.spy(hello);

    hello();
    assert(spy.notCalled);
  });

  it('method: records object method invoke spy()', function () {
    var tom = {
      hello: function () {
        console.log('hello, records object method invoke spy()');
      }
    }
    var spy = sinon.spy(tom, 'hello');

    spy();
    assert(spy.called);
  });

  it('method: records object method invoke method()', function () {
    var tom = {
      hello: function () {
        console.log('hello, records object method invoke method()');
      }
    }
    var spy = sinon.spy(tom, 'hello');

    tom.hello.restore();  // restore original method
    tom.hello();
    assert(spy.notCalled);
  });

//  it('callbacks', function() {
//  });
});
