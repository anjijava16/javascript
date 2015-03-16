/*
 Remember that each object in JavaScript is actually a chain of one or more objects.
 The first object inherits properties from the later objects.
 */
var arr = ['a', 'b'];
var p = Object.getPrototypeOf;

console.log(p(arr) === Array.prototype);      // true
console.log(p(p(arr)) === Object.prototype);  // true
console.log(p(p(p(arr))) === null);           // true

/*
 Properties in “earlier” objects override properties in “later” objects. For example,
 Array.prototype provides an array-specific version of the toString() method, overriding Object.prototype.toString().
 */
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(arr.toString());
