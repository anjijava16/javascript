'use strict';
function Super(prop1, prop2){
  this.prop1 = prop1;
  this.prop2 = prop2;
}
Super.prototype.methodB = function(x, y){
  return 'Super.prototype.methodB';
};

function Sub(prop1, prop2, prop3, prop4){
  Sub._super.constructor.call(this, prop1, prop2);
  this.prop3 = prop3;
  this.prop4 = prop4;
}

Sub._super = Super.prototype;

Sub.prototype = Object.create(Sub._super); // connect Super prototype, so Super.prototype is prototype of subInstance.
Sub.prototype.methodB = function(x, y){
  var superResult = Sub._super.methodB.call(this, x, y);
  return this.prop3 + ' ' + superResult;
};

var subInstance = new Sub('p1', 'p2', 'p3', 'p4');
console.log(subInstance instanceof Sub);  // true
console.log(Sub.prototype.isPrototypeOf(subInstance));  // true
console.log(subInstance instanceof Super);  // true
console.log(Super.prototype.isPrototypeOf(subInstance));  // true
console.log(subInstance.methodB(1, 2));  // p3 Super.prototype.methodB
var p = Object.getPrototypeOf;
console.log(p(subInstance) === Sub.prototype);  // true

console.log(p(subInstance));  // { methodB: [Function] }
console.log(Sub.prototype);  // { methodB: [Function] }
