/*
 the solution is to make a direct call to hasOwnProperty.
 */
var obj1 = {hasOwnProperty: 123};
console.log(Object.prototype.hasOwnProperty.call(obj1, 'hasOwnProperty'));  // true

var obj2 = Object.create(null);
console.log(Object.prototype.hasOwnProperty.call(obj2, 'toString'));   // false
