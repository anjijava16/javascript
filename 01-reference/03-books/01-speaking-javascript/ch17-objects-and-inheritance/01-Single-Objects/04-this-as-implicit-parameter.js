/*
 this as an Implicit Parameter of Functions and Methods
 */
/*
  #Function
 */
// sloppy mode
function returnThisSloppy(){
  return this;
}
// `global` in node is the Global Object, 'window' is browser Global Object
console.log(returnThisSloppy() === global);  // true

// strict mode
function returnThisStrict(){
  'use strict';
  return this;
}
console.log(returnThisStrict() === undefined);  // true

/*
  #Method
 */
var obj = {
  method: returnThisStrict
};
console.log(obj.method() === obj);  // true
