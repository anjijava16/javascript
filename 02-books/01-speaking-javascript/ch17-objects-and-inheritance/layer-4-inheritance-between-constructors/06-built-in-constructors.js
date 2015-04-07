'use strict';
var p = Object.getPrototypeOf;

console.log(p([]));  // []
console.log(Array.prototype);  // []
console.log(p([]) === Array.prototype);  // true
console.log(p(p([])));  // {}
console.log(Object.prototype);  // {}
console.log(p(p([])) === Object.prototype);  // true
console.log(p(p(p([]))));  // null
console.log(p(p(p([]))) === null);  // true

var proto = {
  describe: function(){
    return 'name: ' + this.name;
  }
};
var obj = Object.create(proto, {
  name: {
    value: 'obj'
  }
});
console.log(obj.describe());

console.log(p(obj));
console.log(p(obj) === proto);
