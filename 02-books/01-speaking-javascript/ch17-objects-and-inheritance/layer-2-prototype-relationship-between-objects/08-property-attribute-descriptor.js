'use strict';
/*
 Attribute key	   Default value
 [[Value]]         undefined
 [[Get]]           undefined
 [[Set]]           undefined
 [[Writable]]      false
 [[Enumerable]]    false
 [[Configurable]]  false
 */
/*
 #Getting and Defining Properties via Descriptors
 Defining a property
 Defining a property means something different depending on whether a property already exists:
 - If a property does not exist, create a new property whose attributes are as specified by the descriptor.
 If an attribute has no corresponding property in the descriptor, then use the default value.
 */
var obj = {};
Object.defineProperty(obj, 'foo', {configurable: true});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
/*
 { value: undefined,
 writable: false,
 enumerable: false,
 configurable: true }
 */

/*
 If a property already exists, update the attributes of the property as specified by the descriptor.
 If an attribute has no corresponding property in the descriptor, then don’t change it.
 */
Object.defineProperty(obj, 'foo', {writable: true});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
/*
 { value: undefined,
 writable: true,
 enumerable: false,
 configurable: true }
 */

/*
 #Object.getOwnPropertyDescriptor(obj, propKey)
 Returns the descriptor of the own property of obj whose key is propKey. If there is no such property, undefined is returned.
 */
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
/*
 { value: [Function: toString],
 writable: true,
 enumerable: false,
 configurable: true }
 */

console.log(Object.getOwnPropertyDescriptor({}, 'toString'));  // undefined

/*
 #Object.defineProperty(obj, propKey, propDesc)
 Create or change a property of obj whose key is propKey and whose attributes are specified via propDesc. Return the modified object.
 */
var obj = Object.defineProperty({},
  'foo', {
    value: 123,
    enumerable: true,
    writable: false
    // configurable: false (default value)
  }
);

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
/*
 { value: 123,
 writable: false,
 enumerable: true,
 configurable: false }
 */

console.log(obj.foo);  // 123
try{
 obj.foo = 'new value';
}
catch(e){
 console.log(e);  // [TypeError: Cannot assign to read only property 'foo' of #<Object>]
}
console.log(obj.foo);  // 123 - it is not changed because foo property is readonly

/*
 #Object.defineProperties(obj, propDescObj)
 The batch version of Object.defineProperty(). Each property of propDescObj holds a property descriptor.
 The keys of the properties and their values tell Object.defineProperties what properties to create or change on obj.
 */
var obj = Object.defineProperties({}, {
 foo: {value: 123, enumerable: true},
 bar: {value: 'abc', enumerable: true, writable: false}
});
console.log(obj.bar);  // abc
try{
 obj.bar = 'new value';
}
catch(e){
 console.log(e);  // [TypeError: Cannot assign to read only property 'bar' of #<Object>]
}
console.log(obj.bar);  // abc - it is not changed because bar property is readonly

/*
 #Object.create(proto, propDescObj?)
 First, create an object whose prototype is proto. Then, if the optional parameter propDescObj has been specified,
 and add properties to it - in the same manner as Object.defineProperties. Finally, return the result.
 */
var obj = Object.create(Object.prototype, {
 foo: {value: 123, enumerable: true},
 bar: {value: 'xyz', enumerable: true, writable: false},
 say: {
  value: function(){console.log('hello ' + this.bar)},
  writable: false
 }
});
console.log(obj);  // { foo: 123, bar: 'xyz' }
console.log(obj.bar);  // xyz
try{
 obj.bar = 'new value';
}
catch(e){
 console.log(e);  // [TypeError: Cannot assign to read only property 'bar' of #<Object>]
}
console.log(obj.bar);  // xyz - it is not changed because bar property is readonly
obj.say();  // hello xyz
try{
 obj.say = function(){console.log('changed function')};
}
catch(e){
 console.log(e);  // [TypeError: Cannot assign to read only property 'say' of #<Object>]
}
obj.say();  // hello
