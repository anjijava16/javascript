var proto = Object.defineProperties({}, {
  protoEnumTrue: {value: 1, enumerable: true},
  protoEnumFalse: {value: 1, enumerable: false}
});
var obj = Object.create(proto, {
  objEnumTrue: {value: 1, enumerable: true},
  objEnumFalse: {value: 2, enumerable: false}
});

/*
 #The effects of enumerability
 Among property-related operations, enumberability only influences the for-in loop and Object.keys().
 The for-in loop iterates over the keys of all enumerable properties, including inherited ones
 */
for(var x in obj){
  console.log(x);
}
/*
 objEnumTrue
 protoEnumTrue
 */

// Object.keys() returns the keys of all own (noninherited) enumerable properties.
console.log(Object.keys(obj));  // [ 'objEnumTrue' ]

// Use Object.getOwnPropertyNames() to get the keys of all own properties
console.log(Object.getOwnPropertyNames(obj));  // [ 'objEnumTrue', 'objEnumFalse' ]

/*
 #The effects of inheritance
 Only the for-in loop and the in operator consider inheritance
 */
console.log('toString' in obj);  // true
console.log(obj.hasOwnProperty('toString'));  // false
console.log(obj.hasOwnProperty('objEnumFalse'));  // true

/*
 #Computing the number of own properties of an object
 Objects don’t have a method such as length or size, so you have to use the following workaround
 */
console.log(Object.keys(obj).length);  // 1

/*
 #Best Practices: Iterating over Own Properties
 To iterate over property keys:
 */
// Combine for-in with hasOwnProperty(), in the manner described in for-in. This works even on older JavaScript engines. For example:
for(var key in obj){
  if(Object.prototype.hasOwnProperty.call(obj, key)){
    console.log(key);
  }
}
/*
 objEnumTrue
 */

var obj = {first: 'John', last: 'Doe'};
// Visit non-inherited enumerable keys
Object.keys(obj).forEach(function(key){
  console.log(key);
});
/*
 first
 last
 */
