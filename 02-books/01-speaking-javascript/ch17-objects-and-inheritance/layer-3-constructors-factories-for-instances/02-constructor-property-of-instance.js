// By default, each function C contains an instance prototype object C.prototype whose property constructor point
function C(){
}
console.log(C.prototype.constructor === C);  // true

// Because the constructor property is inherited from the prototype by each instance, you can use it to get the constructor of an instance.
var o = new C();
console.log(o.constructor);  // [Function: C]

/*
 #Use cases for the constructor property
 */
/*
 Use case 1 - Switching over an object's constructor
 In the following catch clause, we take different actions, depending on the constructor of the caught exception:
 try {
   ...
 } catch (e) {
   switch (e.constructor) {
     case SyntaxError:
       ...
       break;
     case CustomError:
       ...
       break;
     ...
   }
 }
 */

// Use case 2 - Determining the name of an object's constructor
function Foo(){
}
var f = new Foo();
console.log(f.constructor.name);  // Foo

// Use case 3 - Creating similar objects
function Constr(){
}
var x = new Constr();
var y = new x.constructor();
console.log(y instanceof Constr);  // true

/*
 #Best practice
 */
// Make sure that for each constructor C, the following assertion holds
function C(){
}
console.log(C.prototype.constructor === C);  // true

// You should avoid replacing the prototype object and only add properties to it
// *Avoid*
C.prototype = {
  method1: function(){}
};
console.log(C.prototype.constructor === C);  // false
// *Prefer*
function B(){
}
B.prototype.method1 = function(){}
console.log(B.prototype.constructor === B);  // true
// *If you do replace it, you should manually assign the correct value to constructor
C.prototype = {
  constructor: C,
  method1: function(){}
};
console.log(C.prototype.constructor === C);  // true
