'use strict';
/*
 #autodefining - don't put writable properties in proto because assignment on inherited obj property will override it.
 There either is no property prop, or it is inherited and writable. In both cases, define an own property prop that is writable,
 configurable, and enumerable. In the latter case, we have just overridden an inherited property (nondestructively changed it).
 In the former case, a missing property has been defined automatically.
 This kind of autodefining is problematic, because typos in assignments can be hard to detect.
 */
var proto = Object.create(Object.prototype, {
  foo: {value: 'abc', writable: true}
});
var obj = Object.create(proto);

console.log(obj.foo);  // abc
obj.foo = 'xyz';
console.log(obj.foo);  // xyz
console.log(proto.foo);  // abc

/*
 #Inherited Read-Only Properties Can't Be Assigned To
 */
var proto = Object.create(Object.prototype, {
  foo: {value: 'abc', writable: false}
});
var obj = Object.create(proto);

console.log(obj.foo);  // abc
try{
  obj.foo = 'xyz';
}
catch(e){
  console.log(e);  // [TypeError: Cannot assign to read only property 'foo' of #<Object>]
}
console.log(obj.foo);  // abc
console.log(proto.foo);  // abc
