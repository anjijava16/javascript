var assert = require('assert');
var sinon = require('sinon');

function Person(name) {
  var privatePlusOne = function(len){
    return len + 1;
  }
  var privateLength = function(){   // private function
    return privatePlusOne(name.length);
  };

  return {
    nameLength: privateLength,      // public
    say: function () {              // public
      console.log(name);
    }
  };
}

var ken = new Person('Ken');
console.log(ken.nameLength());

describe('#stub tests', function () {
  it('FAIL EXPECTED: stub private function in closure', function () {
    var tom = new Person('Tom');
    // Error: "Attempted to wrap undefined property privatePlusOne as function" because it is private
    var stub = sinon.stub(tom, 'privatePlusOne');
    //var stub = sinon.stub(tom, 'nameLength');
    stub.returns(2);
    console.log(tom.nameLength());
    stub.restore();
  });
});

