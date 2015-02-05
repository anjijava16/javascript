// They 'reveal' the private functions increment and decrement to outside consumers of the module.
// First, create all private properties and methods, next only return the ones that should be publicly available.
// It is an elegant and tidy way of structuring your immediate functions modules.

var module = (function(){
  // private area
  var count = 0;
  var increment = function() {count++;};
  var decrement = function() {count--;};
  return {
    // public area
    add: function(){increment();},

    increment: increment,      // revealing method
    decrement: decrement       // revealing method
  };
})();
