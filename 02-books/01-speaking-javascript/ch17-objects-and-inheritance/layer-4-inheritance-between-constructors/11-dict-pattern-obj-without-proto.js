'use strict';
/*
 #The dict Pattern: Objects Without Prototypes Are Better Maps
 It a better map (dictionary) than a normal object, which is why this pattern is sometimes called the dict pattern.
 */
var dict = Object.create(null);

/*
 ##Normal objects
 Usually, each object has at least Object.prototype in its prototype chain. The prototype of Object.prototype is null,
 so that's where most prototype chains end
 */
console.log(Object.getPrototypeOf({}) === Object.prototype);  // true
console.log(Object.getPrototypeOf(Object.prototype));  // null

/*
 ##Prototype-less objects
 advantage: inherited properties are not an issue anymore because there are none. Therefore, you can use the in operator to read properties
 disadvantage: lose the service provided by Object.prototype. For example, a dict object can't be auto converted to a string anymore.
 */
try{
  console.log('Result: ' + dict);
}
catch(e){
  console.log(e);  // [TypeError: Cannot convert object to primitive value]
}
