'use strict';
/*
 Almost all objects have Object.prototype in their prototype chain.
 */
console.log(Object.prototype.isPrototypeOf({}));
console.log(Object.prototype.isPrototypeOf([]));
console.log(Object.prototype.isPrototypeOf(/xyz/));

/*
 #Conversion to Primitive
 The following two methods are used to covert an object to a primitive value
 */
/*
 ##Object.ptototype.toString()
 Returns a string representation of an object
 */
console.log({first: 'John', last: 'Doe'}.toString());  // [object Object]
console.log(['a', 'b', 'c'].toString());  // a,b,c

/*
  ##Object.prototype.valueOf()
  This is the preferred way of converting an object to a number. The default implementation returns this.
 */
var obj = {
  getThis: function(){
    console.log(this);
    return this;
  }
};
var thisOfObj = obj.getThis();  // { say: [Function] }
console.log(obj.valueOf() === thisOfObj);  // true
console.log(obj.valueOf());  // { say: [Function] }
console.log(obj);  // { getThis: [Function] }
console.log(obj.valueOf() === obj);  // true

// valueOf is overridden by wrapper constructors to return the wrapped primitive
console.log(new Number(7).valueOf());  // 7

/*
 The conversion to number and string builds on the conversion to primitive.
 */
// ##valueOf() is preferred by the conversion to number
console.log(3 * {valueOf: function(){return 5}});  // 15

// ##toString() is preferred by the conversion to string
console.log(String({toString: function(){return 'ME'}}));  // ME

// The conversion to boolean is not configurable; objects are always considered to be true

/*
 #Prototypal Inheritance and Properties
 The following methods help with prototypal inheritance and properties
 */
/*
 ##Object.prototype.isPrototypeOf(obj)
 Returns true if the receiver is part of the prototype chain of obj
 */
var proto = {};
var obj = Object.create(proto);
console.log(proto.isPrototypeOf(obj));  // true
console.log(obj.isPrototypeOf(obj));  // false
var sub = Object.create(obj);
console.log(proto.isPrototypeOf(sub));  // true

/*
 ##Object.prototype.hasOwnProperty(key)
 Returns true if this owns a property whose key is key. "Own" means that the property exists in the object itself and not in one of its prototypes.
 You normally should invoke this method generically (not directly).
 */
var proto = {foo: 'abc'};
var obj = Object.create(proto);
obj.bar = 'def';

console.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));  // false
console.log(Object.prototype.hasOwnProperty.call(obj, 'bar'));  // true

/*
 ##Object.prototype.propertyIsEnumerable(propKey)
 Returns true if the receiver has a property the key propKey that is enumerable and false otherwise
 */
var obj = {foo: 'abc'};
console.log(obj.propertyIsEnumerable('foo'));  // true
console.log(obj.propertyIsEnumerable('toString'));  // false
console.log(obj.propertyIsEnumerable('unknown'));  // false

