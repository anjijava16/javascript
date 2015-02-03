var assert = require('assert');
var sinon = require('sinon');

describe('fake timers example', function() {
  before(function () {
    this.clock = sinon.useFakeTimers();
  });
  after(function () {
    this.clock.restore();
  });

  it("test something using timers", function () {
    var stub = sinon.stub();
    setTimeout(stub, 1000);

//    this.clock.tick(500);  // this will fail
    this.clock.tick(1008);  // this will pass

    assert(stub.called);
  });
});
