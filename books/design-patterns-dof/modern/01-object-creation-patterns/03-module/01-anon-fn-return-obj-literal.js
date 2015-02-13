// Private area is inaccessible from outside the module.
// Through closure, the public area has access to all private members.
// Note: a new object is created without the new operator by defining an object literal which is returned by the anonymous function.

var module = (function(){
  // private area
  var count = 0;
  var increment = function() {count++;};
  var decrement = function() {count--;};
  return {
    // public area
    addOne: function() {increment();},
    subtractOne: function() {decrement();},
    getCount: function() {return count;}
  };
})();

module.addOne();
module.addOne();
console.log(module.getCount());
module.subtractOne();
console.log(module.getCount());
