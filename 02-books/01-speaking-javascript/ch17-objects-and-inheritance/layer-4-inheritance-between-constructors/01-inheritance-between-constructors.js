'use strict';
/*
 #Inheriting Instance Properties
 Instance properties are set up in the constructor itself,
 so inheriting the super-constructor's instance properties involves calling that constructor.
 */

function Super(prop1, prop2){
  this.prop1 = prop1;
  this.prop2 = prop2;
}
Super.prototype.methodB = function(x, y){
  return 'Super.prototype.methodB';
};

function Sub(prop1, prop2, prop3, prop4){
  Super.call(this, prop1, prop2);  // invoke Super() to add Super instance properties
  this.prop3 = prop3;
  this.prop4 = prop4;
}

/*
 #Inheriting Prototype Properties
 Shared properties such as methods are kept in the instance prototype.
 Thus, we need to find a way for Sub.prototype to inherit all of Super.prototype’s properties.
 The solution is to give Sub.prototype the prototype Super.prototype.
 */
Sub.prototype = Object.create(Super.prototype); // connect Super prototype, so Super.prototype is prototype of subInstance.
Sub.prototype.constructor = Sub;
Sub.prototype.methodC = function(){
  console.log('Sub.prototype.methodC');
};

/*
 #Ensuring That instanceof Works
 “Ensuring that instanceof works” means that every instance of Sub must also be an instance of Super.
 */
var subInstance = new Sub('p1', 'p2', 'p3', 'p4');
console.log(subInstance instanceof Sub);  // true
console.log(Sub.prototype.isPrototypeOf(subInstance));  // true
console.log(subInstance instanceof Super);  // true
console.log(Super.prototype.isPrototypeOf(subInstance));  // true

/*
 #Making a Supercall
 To understand supercalls, you need to know the term home object.
 The home object of a method is the object that owns the property whose value is the method.
 For example, the home object of Sub.prototype.methodB is Sub.prototype.
 */
Sub.prototype.methodB = function(x, y){
  var superResult = Super.prototype.methodB.call(this, x, y);
  return this.prop3 + ' ' + superResult;
};
console.log(subInstance.methodB(1, 2));  // p3 Super.prototype.methodB
