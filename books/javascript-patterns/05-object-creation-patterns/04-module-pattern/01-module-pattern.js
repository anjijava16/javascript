var MYAPP = MYAPP || {};   // namespace
MYAPP.util = MYAPP.util || {};
MYAPP.util.object = MYAPP.util.object || {};
MYAPP.util.lang = MYAPP.util.lang || {};

MYAPP.util.array = (function () { // module
  // declaring dependencies
  var uobj = MYAPP.util.object;
  var ulang = MYAPP.util.lang;

  // private properties
  var array_string = "[object Array]";
  var ops = Object.prototype.toString;

  // private methods
  // ...

  // optionally one-time init procedures
  // ...

  // public API
  return {
    name: "Tom",    // public property
    inArray: function (needle, haystack) {  // public method
      console.log("inArray is invoked");
    },
    isArray: function(a){
      console.log("isArray is invoked");
      return ops.call(a) === array_string;
    }
    // ... more methods and properties
  };
})();
