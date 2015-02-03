var assert = require('assert');
var sinon = require('sinon');

// queries are getters are tested using stub
describe('#stub tests', function () {
  describe('test Subject.subscribe() and Subject.publish()', function () {
    function Publisher(){
      this.handlers = [];
    }
    Publisher.prototype = {
      subscribe: function (fn) {
        this.handlers.push(fn);
      },
      publish: function (msg, data) {
        this.handlers.forEach(function (item) {
          try{
            item(msg, data);
          }
          catch(e){
            console.log('publish caught: ' + e);
          }
        })
      }
    }
    function Subscriber(){
    }
    Subscriber.prototype = {
      // onPublish() is a long run method that need to be replaced when testing subject
      onPublish: function (msg, data) {
        console.log(msg + ': publish "' + data + '"');
        assert.equal(msg, message);
        if (msg === 'error') {
          throw new Error('"error" message reports error');
        }
      }
    }
    // test data
    var message = 'error';
    var data = 'error occurs';
    it('product code without stub: compare arguments in subscriber.onPublish()', function () {
      var publisher = new Publisher();
      var subscriber = new Subscriber();  // product code
      publisher.subscribe(subscriber.onPublish);
      publisher.publish(message, data);
    });
    // stub: pre-programmed behavior
    it('test code using stub: stub throws error when arg1="error"', function () {
      var publisher = new Publisher();
      // use stub that throws when arg1='error' to replace the long run method above subscriber.onPublish() for testing
      var stub = sinon.stub();
      // note: spy doesn't have withArgs().throws(), so we can't use spy to test each code path
      stub.withArgs('error').throws(new Error('"error" message reports error'));
      publisher.subscribe(stub);
      publisher.publish(message, data);
      assert(stub.called);
      assert(stub.calledWith(message, data));
    });
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
});
