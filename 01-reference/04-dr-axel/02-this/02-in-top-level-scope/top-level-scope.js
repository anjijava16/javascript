/*
 In browsers, the top-level scope is the global scope and this refers to the global object (like window does).
 In Node.js, you normally execute code in modules. Therefore, the top-level scope is a special module scope.
 */

console.log(this !== global);      // true
console.log(this === global);      // false
console.log(this);                 // {}

console.log(Math === global.Math); // true

console.log(this === module.exports); // true
