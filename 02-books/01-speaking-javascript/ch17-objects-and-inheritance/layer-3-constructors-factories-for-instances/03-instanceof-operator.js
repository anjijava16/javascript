'use strict';
/*
 #The instanceof operator:
   value instanceof Constr
 determines whether value has been created by the constructor Constr or a subconstructor.
 It does so by checking whether Constr.prototype is in the prototype chain of value.
 */
function Constr(){
}
var value = new Constr();
console.log(value instanceof Constr);  // true
console.log(Constr.prototype.isPrototypeOf(value));  // true

// Some examples
console.log({} instanceof Object);  // true
console.log([] instanceof Array);  // true - constructor of []
console.log({} instanceof Object);  // true - super-constructor of []
console.log(new Date() instanceof Date);  // true - constructor of new Date()
console.log(new Date() instanceof Object);  // true - super-constructor of new Date()

// instanceof is always false for primitive values
console.log('abc' instanceof Object);  // false
console.log(123 instanceof Number);  // false

// instanceof throws an exception if its right side isn't a function
try{
  console.log([] instanceof 123);
}
catch(e){
  console.log(e);  // [TypeError: Expecting a function in instanceof check, but got ]
}

/*
 #Pitfall: objects that are not instances of Object
 Almost all objects are instances of Object, because Object.prototype is in their prototype chain.
 But there are also objects where that is not the case.
 */
console.log(Object.create(null) instanceof Object);  // false
console.log(Object.prototype instanceof Object);  // false

// They don't have prototype
console.log(Object.getPrototypeOf(Object.create(null)));  // null
console.log(Object.getPrototypeOf(Object.prototype));  // null

// But typeof correctly classifies them as objects
console.log(typeof Object.create(null));  // object
console.log(typeof Object.prototype);  // object

