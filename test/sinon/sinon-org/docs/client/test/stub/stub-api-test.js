var assert = require('assert');
var sinon = require('sinon');

function Click(){
  this.handlers = []; // observers
};

Click.prototype = {
  subscribe: function(fn){
    this.handlers.push(fn);
  },
  unsubscribe: function(fn){
    this.handlers = this.handlers.filter(
      function(item){
        if(item !== fn){
          return item;
        }
      }
    );
  },
  fire: function(msg, data){
    this.handlers.forEach(function(item){
      item(msg, data);
    });
  }
};

describe('stub api test', function() {
  it('test observer pattern', function() {
    console.log('#test observer pattern');

    var subscriber = function(msg, data) {
      console.log(msg, data);
    };

    var click = new Click();

    click.subscribe(subscriber);
    click.fire('event #1', 'hello 1');

    click.unsubscribe(subscriber);
    click.fire('event #2', 'hello 2');

    click.subscribe(subscriber);
    click.fire('event #3', 'hello 3');
  });

  it('1, test should call subscribers with message as first argument', function(done) {
    var message = 'an example message';

    var subscriber = function(msg, data) {
      console.log(msg, data);
      assert.equal(msg, message);
      done();
    };

    var click = new Click();

    click.subscribe(subscriber);
    click.fire(message, 'hello 1');
  });

  it('2, test should call subscribers (stub) with message as first argument', function() {
    console.log('#recommend spy.calledWith(arg1, arg2, ...)');
    var message = 'an example message';

    var stub = sinon.stub();

    var click = new Click();

    click.subscribe(stub);
    click.fire(message, 'hello 1');

    assert(stub.calledWith(message));
  });

  it('test should stub method differently based on arguments', function() {
    var stub = sinon.stub();
    stub.withArgs(42).returns(1);
    stub.withArgs(1).throws(new Error('error occurs'));

    console.log('stub() returns', stub());  // No return value, no exception
    console.log('stub(42) returns', stub(42));  // Returns 1
    try{
      stub(1);
    }
    catch(e){
      console.log('stub(1) returns', e);
    }
  });

  it('test should stub method differently on consecutive calls', function() {
    var stub = sinon.stub();
    stub.onCall(0).returns(1);
    stub.onCall(1).returns(2);
    stub.returns(3);

    console.log('first stub() returns',stub()); // Returns 1
    console.log('second stub() returns',stub()); // Returns 2
    console.log('third stub() returns', stub()); // All following calls return 3
  });

  it('test should stub method differently on consecutive calls with certain argument', function() {
    var stub = sinon.stub();
    stub.withArgs(42)
      .onFirstCall().returns(1)
      .onSecondCall().returns(2);
    stub.returns(0);

    console.log(stub(1));  // Returns 0
    console.log(stub(42));  // Returns 1
    console.log(stub(1));  // Returns 0
    console.log(stub(42));  // Returns 2
    console.log(stub(1));  // Returns 0
    console.log(stub(42));  // Returns 0
  });

  it('stub api test', function(){
    var object = {
      name: 'my object',
      method: function(n){
        console.log('#object.method() is invoked with arg=', n);
      }
    };

    function proxy(n){
      object.method(n);
    };

    var obj = {name: 'Tom'};

    var stub = sinon.stub(object, "method");
    stub.withArgs(42);
    stub.withArgs(1);
    stub.withArgs(18);

    object.method(42);
    object.method(1);
    proxy(1);  // will invoke object.method(1)
    object.method(8);
    object.method(obj);

    console.log('stub.callCount =', stub.callCount);
    assert(stub.withArgs(42).called);
    assert(stub.withArgs(42).calledOnce);
    assert(stub.withArgs(1).calledTwice);
    assert(stub.withArgs(18).notCalled);
    console.log('stub.firstCall.args =', stub.firstCall.args);
    console.log('stub.secondCall.args =', stub.secondCall.args);
    console.log('stub.lastCall.args =', stub.lastCall.args);
    assert(stub.calledOn(object));
    console.log('stub.thisValues[0].name =', stub.thisValues[0].name);

    // ======================================

    var stub = sinon.stub();
    stub(7, 8, 9);
    assert(stub.calledWith(7, 8, 9));
    console.log('stub.args =', stub.args);

    // ======================================

    var stub = sinon.stub();
    stub.returnsArg(0);
    console.log('stub.returnsArg(0) returns', stub(7, 8, 9));

    // ======================================

    var stub = sinon.stub();
    stub.returnsThis();
    console.log('stub.returnsThis() returns', stub(7, 8, 9));

    // ======================================

    var stub = sinon.stub();
    stub.throws();

    try{
      stub();
    }catch (e){}

    assert(stub.threw());

    // ======================================

    var stub = sinon.stub();
    stub.throws("Error");

    try{
      stub();
    }catch (e){}

    assert(stub.threw("Error"));

    // ======================================

    function UserException(message) {
      this.message = message;
      this.name = "UserException";
    };

    var err = new UserException('Invalid Input');

    var stub = sinon.stub();
    stub.throws(err);

    try{
      stub();
    }catch (e){}

    assert(stub.threw());
    assert(stub.threw("UserException"));
    assert(stub.threw(err));
    assert(stub.alwaysThrew());
    assert(stub.alwaysThrew("UserException"));
    assert(stub.alwaysThrew(err));
    console.log('stub.exceptions =', stub.exceptions)

    // ======================================

    var stub = sinon.stub();
    stub.callsArg(0);

    function callback1(){
      console.log('callsArg(0) - callback1 is invoked');
    }

    stub(callback1);   // invoke callback1

    var spy = sinon.spy();
    stub(spy, callback1);  // invoke spy
    assert(spy.called);

    // ======================================

    function Click(){
      this.handlers = []; // observers
    };

    Click.prototype = {
      subscribe: function(fn){
        this.handlers.push(fn);
      },
      unsubscribe: function(fn){
        this.handlers = this.handlers.filter(
          function(item){
            if(item !== fn){
              return item;
            }
          }
        );
      },
      fire: function(msg, data){
        this.handlers.forEach(function(item){
          item(msg, data);
        });
      }
    };

    var stub = sinon.stub();
    stub.callsArg(0);

    function callback2(){
      console.log('click.fire callback2 is invoked');
    }

    var click = new Click();

    click.subscribe(stub);
    click.fire(callback2, 'invoke callback2');

    var spy = sinon.spy();
    click.fire(spy, 'invoke spy');
    assert(spy.called);

    // ======================================

    var stub = sinon.stub();
    stub.callsArgOn(0, this);

    function callback3(){
      console.log('callsArgOn(0, this) - callback3 is invoked');
    }
    stub(callback3);

  });
});
