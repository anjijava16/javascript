//returned function has full access to any private variable or function in the surrounding constructor function.

function Person(name){
  var privateName = name;               // private
  var privateLength = function(){       // private
    return privateName.length;
  };
  return function(name){
    this.name = name;                   // public
    this.nameLength = privateLength;    // public
    this.say = function(){              // public
      console.log(privateName);
    }
  };
}

var Tom = new Person('Tom');
var Dick = new Person('Dick');

console.log(Tom);
var t = new Tom('t');
console.log(t);
console.log(t.nameLength());
t.say();

var d = new Dick('d');
d.say();

// following wont work
//tom.say();
//console.log(tom.nameLength);
//dick.say();
