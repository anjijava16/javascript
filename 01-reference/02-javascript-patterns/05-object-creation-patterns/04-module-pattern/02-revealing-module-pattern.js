// all methods are kept private and only expose those that you decide at the end

var MYAPP = MYAPP || {};   // namespace
MYAPP.util = MYAPP.util || {};

MYAPP.util.array = (function () { // module
  // private properties
  var array_string = "[object Array]";
  var ops = Object.prototype.toString;

  var inArray = function (needle, haystack) {  // public method
    console.log("inArray is invoked");
  };

  var isArray = function(a){
    console.log("isArray is invoked");
    return ops.call(a) === array_string;
  };

  // public API
  return {
    name: "Tom",      // public property
    isArray: isArray,
    indexOf: inArray
    // ... more methods and properties
  };
})();
