//Closure: when instantiating an object with a constructor function the internal values are wrapped into a closure
//and stay into existence until the object goes out of scope and gets garbage collected,
//object's public and private properties and methods have full access to its private variables and functions in closure (and arguments).
//
//NOT recommended because argument values are also part of a function's closure,
// so there is no need to assign the argument to a local value.
//var Person = function (name) {
//  var privateName = name;    // private
//  return {
//    say: function () {
//      alert(privateName);
//    }
//  };
//}
//

function Person(name) {
  var privateLength = function(){   // private function
    return name.length;
  };

  return {
    nameLength: privateLength,      // public
    say: function () {              // public
      console.log(name);
    }
  };
}

var tom = new Person('Tom');
var dick = new Person('Dick');

tom.say();
console.log(tom.nameLength());
dick.say();
