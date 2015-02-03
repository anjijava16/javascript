var assert = require('assert');
var sinon = require('sinon');
var PubSub = require('pubsub-js');

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

describe('spy api test', function() {
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

  it('2, test should call subscribers (spy) with message as first argument', function() {
    console.log('#recommend spy.calledWith(arg1, arg2, ...)');
    var message = 'an example message';

    var spy = sinon.spy();

    var click = new Click();

    click.subscribe(spy);
    click.fire(message, 'hello 1');

    assert(spy.calledWith(message));
  });
  // uses two dimensional args array directly on the spy
  it('test should call subscribers (spy) with message as first argument - 2', function() {
    var message = 'an example message';
    var spy = sinon.spy();

    var click = new Click();

    click.subscribe(spy);
    click.fire(message, 'hello 1');
    click.fire('message-2', 'hello 2');

    console.log(spy.args);
    console.log(spy.args[0]);
    console.log(spy.args[0][0]);
    assert.equal(message, spy.args[0][0]);
  });
  // fetches the first call object and then accesses it's args array
  it('test should call subscribers (spy) with message as first argument - 3', function() {
    var message = 'an example message';
    var spy = sinon.spy();

    var click = new Click();

    click.subscribe(spy);
    click.fire(message, 'hello 1');
    click.fire('message-2', 'hello 2');

//    console.log(spy.getCall(0));  // print the first call object
    console.log(spy.getCall(0).args[0]);
    assert.equal(message, spy.getCall(0).args[0]);
  });
  it('spy api test', function() {

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

    var spy = sinon.spy(object, "method");
    spy.withArgs(42);
    spy.withArgs(1);
    spy.withArgs(18);

    object.method(42);
    object.method(1);
    proxy(1);  // will invoke object.method(1)
    object.method(8);
    object.method(obj);

    console.log('spy.callCount =', spy.callCount);
    assert(spy.withArgs(42).called);
    assert(spy.withArgs(42).calledOnce);
    assert(spy.withArgs(1).calledTwice);
    assert(spy.withArgs(18).notCalled);
    console.log('spy.firstCall.args =', spy.firstCall.args);
    console.log('spy.secondCall.args =', spy.secondCall.args);
    console.log('spy.lastCall.args =', spy.lastCall.args);
    assert(spy.calledOn(object));
    console.log('spy.thisValues[0].name =', spy.thisValues[0].name);

    // ======================================

    var spy = sinon.spy();
    spy(7, 8, 9);
    assert(spy.calledWith(7, 8, 9));
    console.log('spy.args =', spy.args);

    // ======================================

    var err = new Error('positive number only');
    function add(x, y){
      console.log('add() is invoked');
      if(x < 0 || y < 0) throw err;
      return x + y;
    }

    console.log('before spy wrap add() ', add);

    var spy = sinon.spy(add);
    spy(1, 2);
    assert(spy.calledWith(1, 2));
    assert(spy.calledWithExactly(1, 2));
    assert(spy.calledWithMatch(1, 2));
    console.log('add: ', spy.returnValues);
    assert(spy.neverCalledWith(11, 22));
    assert(spy.neverCalledWithMatch(11, 22));

    console.log('after spy wrap add() ', add);
    console.log('spy() ', spy);

    try{
      spy(-1, 2);
    }catch (e){}

    assert(spy.threw());
    assert(spy.threw("Error"));  // spy.threw("TypeError");
    assert(spy.threw(err));  // spy.threw(obj);

    // ======================================

    function UserException(message) {
      this.message = message;
      this.name = "UserException";
    };

    var err = new UserException('Invalid Input');
    function customError(){
      throw err;
    }

    var spy = sinon.spy(customError);

    try{
      spy();
    }catch (e){}

    assert(spy.alwaysThrew());
    assert(spy.alwaysThrew("UserException"));
    assert(spy.alwaysThrew(err));
    console.log('spy.exceptions =', spy.exceptions)

    // ======================================

    var tom = {
      name: 'Tom'
    }
    function getPerson(){
      return tom;
    }
    var spy = sinon.spy(getPerson);
    spy();
    assert(spy.alwaysReturned(tom));
    console.log('spy.returnValues =', spy.returnValues);

  });
});

describe('PubSub spy api test', function() {
  it('PubSub test should call subscribers with message as first argument', function() {
    console.log('#recommend spy.calledWith(arg1, arg2, ...)');
    var message = 'an example message';
    var spy = sinon.spy();

    PubSub.subscribe(message, spy);

    PubSub.publishSync(message);

    assert(spy.calledWith(message));
  });
  // use two dimensional args array directly on the spy
  it('PubSub test should call subscribers with message as first argument - 2', function() {
    var message = 'an example message';
    var spy = sinon.spy();

    PubSub.subscribe(message, spy);

    PubSub.publishSync(message);

    console.log(spy.args);
    console.log(spy.args[0]);
    console.log(spy.args[0][0]);
    assert.equal(message, spy.args[0][0]);
  });
  // fetches the first call object and then accesses it's args array
  it('PubSub test should call subscribers with message as first argument - 3', function() {
    var message = 'an example message';
    var spy = sinon.spy();

    PubSub.subscribe(message, spy);

    PubSub.publishSync(message);

//    console.log(spy.getCall(0));  // print the first call object
    console.log(spy.getCall(0).args[0]);
    assert.equal(message, spy.getCall(0).args[0]);
  });
});

