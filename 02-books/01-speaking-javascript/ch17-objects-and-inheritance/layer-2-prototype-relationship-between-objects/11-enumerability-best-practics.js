/*
 The general rule is that properties created by the system are nonenumerable, while properties created by users are enumerable.
 Here are some best practices to keep in mind:
 For your own code, you can usually ignore enumerability and should avoid the for-in loop (Best Practices: Iterating over Arrays).
 You normally shouldn’t add properties to built-in prototypes and objects.
 But if you do, you should make them nonenumerable to avoid breaking existing code.
 */
console.log(Object.keys([]));  // []
console.log(Object.getOwnPropertyNames([]));  // [ 'length' ]

console.log(Object.keys(Object.prototype));  // []
console.log(Object.getOwnPropertyNames(Object.prototype));
/*
 [ 'constructor',
 'toString',
 'toLocaleString',
 'valueOf',
 'hasOwnProperty',
 'isPrototypeOf',
 'propertyIsEnumerable',
 '__defineGetter__',
 '__lookupGetter__',
 '__defineSetter__',
 '__lookupSetter__' ]
 */
