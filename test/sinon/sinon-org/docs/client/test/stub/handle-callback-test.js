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

describe('stub handle callback', function() {
  it('test should call all subscribers, even if there are exceptions', function(){
    var message = 'an example message';
    var error = 'an example error message';
    var stub = sinon.stub();
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();

    var click = new Click();

    click.subscribe(stub);
    click.subscribe(spy1);
    click.subscribe(spy2);
    click.fire(message, 'hello 1');

    assert(spy1.called);
    assert(spy2.called);
    assert(stub.called);
    assert(stub.calledBefore(spy1));
  });
  it('PubSub test should call all subscribers, even if there are exceptions', function () {
    var message = 'an example message';
    var error = 'an example error message';
    var stub = sinon.stub();
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();

    PubSub.subscribe(message, stub);
    PubSub.subscribe(message, spy1);
    PubSub.subscribe(message, spy2);

    PubSub.publishSync(message, undefined);

    assert(spy1.called);
    assert(spy2.called);
    assert(stub.called);
    assert(stub.calledBefore(spy1));
  });
});
