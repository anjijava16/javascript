'use strict';
/*
 #Protecting Objects
 Preventing extensions Object.preventExtensions(obj) - makes it impossible to add properties
 Sealing Object.seal(obj) - prevents extensions and makes all properties "unconfigurable"
 Freezing Object.freeze(obj) - makes all properties nonwritable and seals obj.
 */

/*
 #Preventing Extensions
 Makes it impossible to add properties
 */
var obj = {foo: 'a'};
Object.preventExtensions(obj);
try{
  obj.bar = 'b';
}
catch(e){
  console.log(e);  // [TypeError: Can't add property bar, object is not extensible]
}
// You can still delete properties
console.log(delete obj.foo);  // true
console.log(obj.foo);  // undefined
// You check whether an object is extensible via
console.log(Object.isExtensible(obj));  // false

/*
 #Sealing
 Prevents extensions and makes all properties "unconfigurable". The latter means that the attributes of properties can't be changed anymore.
 For example, read-only properties stay read-only forever.
 */
var obj = {foo: 'a'};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));  // before sealing
/*
 { value: 'a',
 writable: true,
 enumerable: true,
 configurable: true }
 */

// change its attributes before sealing
Object.defineProperty(obj, 'foo', {enumerable: false});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));  // before sealing
/*
 { value: 'a',
 writable: true,
 enumerable: false,
 configurable: true }
 */

Object.seal(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));  // after sealing
/*
 { value: 'a',
 writable: true,
 enumerable: true,
 configurable: false }
 */

// You can still change the property foo
console.log(obj.foo);  // a
obj.foo = 'b';
console.log(obj.foo);  // b

// but you can't change its attributes
try{
  Object.defineProperty(obj, 'foo', {enumerable: false});
}
catch(e){
  console.log(e);  // [TypeError: Cannot redefine property: foo]
}

console.log(Object.isSealed(obj));  // true

/*
 #Freezing
 Makes all properties nonwritable and seals obj. In other words, obj is not extensible and all properties are read-only,
 and there is no way to change that.
 */
var point = {x: 17, y: -5};
Object.freeze(point);

try{
  point.x = 2;
}
catch(e){
  console.log(e);  // [TypeError: Cannot assign to read only property 'x' of #<Object>]
}

try{
  point.z = 123;
}
catch(e){
  console.log(e);  // [TypeError: Can't add property z, object is not extensible]
}

console.log(Object.isFrozen(point));  // true

/*
 #Pitfall: Protection Is Shallow
 Protecting an object is shallow: it affects the own properties, but not the values of those properties.
 Additionally, obj has the prototype Object.prototype, which is also mutable.
 */
var obj = {
  foo: 1,
  bar: ['a', 'b']
};
Object.freeze(obj);

// It is not completely immutable - you can change the (mutable) value of property bar
try{
  obj.foo = 2;
}
catch(e){
  console.log(e);  // [TypeError: Cannot assign to read only property 'foo' of #<Object>]
}

console.log(obj);  // { foo: 1, bar: [ 'a', 'b' ] } - before change obj.bar array value
obj.bar.push('c');  // changes obj.bar array value
console.log(obj);  // { foo: 1, bar: [ 'a', 'b', 'c' ] }
