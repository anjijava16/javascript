/*
 #Setting a property
 */
var proto = {foo: 'a'};
var obj = Object.create(proto);

// obj inherits foo from proto.
console.log(obj.foo);  // a
console.log(obj.hasOwnProperty('foo'));  // false

obj.foo = 'b';
console.log(obj.foo);  // b
console.log(obj.hasOwnProperty('foo'));  // true
console.log(proto.foo);  // 'a'

/*
 #Deleting an inherited property
 You can only delete own properties. Deleting the inherited property foo has no effect.
 */
var proto = {foo: 'a'};
var obj = Object.create(proto);
console.log(delete obj.foo);  // true
console.log(obj.foo);  // 'a'

/*
 #Changing properties anywhere in the prototype chain
 */
/*
 #Finding the object where a property is defined
 Iterates over the property chain of an object obj. It returns the first object that has an own property with key propKey,
 or null if there is no such object.
 */
function getDefiningObject(obj, propKey){
  obj = Object(obj);  // make sure it's an object
  // below calls the method Object.prototype.hasOwnProperty generically
  while(obj && !{}.hasOwnProperty.call(obj, propKey)){
    obj = Object.getPrototypeOf(obj);
    // obj is null if we have reached the end
  }
  return obj;
}

var proto = {foo: 'a'};
var obj = Object.create(proto);
console.log(delete getDefiningObject(obj, 'foo').foo);  // true
console.log(obj.foo);  // undefined
