'use strict';

var proto = {
  protoProp: 'a'
};

var obj = Object.create(proto);
obj.ownProp = 'b';

/*
 #We want obj to be interpreted as a map with the single entry (own properties)
 */
/*
 ##Checking whether a property exists
 */
// ###The in operator checks whether an object has a property with a given key, but it considers inherited properties
console.log('ownProp' in obj);  // true - ok
console.log('unknown' in obj);  // false - ok
console.log('toString' in obj);  // true - wrong, inherited from Object.prototype
console.log('protoProp' in obj);  // true - wrong, inherited from proto

// ###hasOwnProperty() does what we want because it ignores inherited properties.
console.log(obj.hasOwnProperty('ownProp'));  // true - ok
console.log(obj.hasOwnProperty('unknown'));  // false - ok
console.log(obj.hasOwnProperty('toString'));  // false - ok
console.log(obj.hasOwnProperty('protoProp'));  // false - ok

/*
 ##Collecting property keys
 */
// ###for-in find all keys includes inherited properties
for(var propKey in obj){
  console.log(propKey);
}
/*
 ownProp
 protoProp
 */
// The reason that no properties of Object.prototype show up here is that all of them are nonenumerable.

// ###Object.keys() lists only own properties
console.log(Object.keys(obj));  // [ 'ownProp' ]

/*
 ##Getting a property value
 */
// use bracket operator because we have arbitrary keys stored in variables
console.log(obj['toString']);  // [Function: toString] - wrong, inherited property value

// implement one yourself since there is no built-in operation for reading only own properties.
function getOwnProperty(obj, propKey){
  // Using hasOwnProperty() in this manner is problematic (explained and fixed later)
  return (obj.hasOwnProperty(propKey) ? obj[propKey] : undefined);
}

console.log(getOwnProperty(obj, 'toString'));  // undefined

/*
 #Pitfall 2: Overriding Affects Invoking Methods
 */
// The function getOwnProperty() invoked the method hasOwnProperty() on obj. Normally, that is fine.
console.log(getOwnProperty({foo: 123}, 'foo'));  // 123
// However, if you add a property to object whose key is hasOwnProperty, which overrides the method Object.prototype.hasOwnProperty
try{
  getOwnProperty({hasOwnProperty: 123}, 'foo');
}
catch(e){
  console.log(e);  // [TypeError: Property 'hasOwnProperty' of object #<Object> is not a function]
}
// You can fix this problem by directly referring to hasOwnProperty(). This avoids going through obj to find it.
function getOwnProperty(obj, propKey){
  return ({}.hasOwnProperty.call(obj, propKey) ? obj[propKey] : undefined);
}
console.log(getOwnProperty({hasOwnProperty: 789}, 'hasOwnProperty'));  // 789
// We have called hasOwnProperty() generically.
