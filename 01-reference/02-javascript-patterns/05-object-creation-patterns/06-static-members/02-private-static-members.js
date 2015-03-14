// Shared by all the objects created with the same constructor function
// Not accessible outside the constructor

// constructor
var Gadget = (function(){
  // static variable/property
  var counter = 0, NewGadget;

  // this will become the new constructor implementation
  NewGadget = function(){
    ++counter;
  };

  // a privileged method
  NewGadget.prototype.getLastId = function(){
    return counter;
  };

  // overwrite the constructor
  return NewGadget;
})();

var iphone = new Gadget();
console.log(iphone.getLastId()); // 1
var ipod = new Gadget();
console.log(ipod.getLastId()); // 2
var ipad = new Gadget();
console.log(ipad.getLastId()); // 3
