var MYAPP = MYAPP || {};   // namespace
MYAPP.util = MYAPP.util || {};
MYAPP.util.object = MYAPP.util.object || {};
MYAPP.util.lang = MYAPP.util.lang || {};

MYAPP.util.Array = (function () {
// dependencies
  var uobj = MYAPP.util.object,
    ulang = MYAPP.util.lang,
// private properties and methods...
    Constr;
// optionally one-time init procedures // ...
// public API -- constructor
  Constr = function (o) {
    this.elements = this.toArray(o);
  };
// public API -- prototype
  Constr.prototype = {
    constructor: MYAPP.util.Array, version: "2.0",
    toArray: function (obj) {
      for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
        a[i] = obj[i];
      }
      return a;
    }
  };
// return the constructor
// to be assigned to the new namespace return Constr;
}());
