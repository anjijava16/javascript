/*
 #Creating a new object with a given prototype
 Note: use chrome to view the object tree
 */
var PersonProto = {
  describe: function(){
    return 'Person named ' + this.name;
  }
};

var jane = Object.create(PersonProto, {
  name: {value: 'Jane', writable: true}
});

console.log(jane.describe());  // Person named Jane

/*
 But you frequently just create an empty object and then manually add properties, because descriptors are verbose.
 */
var jane = Object.create(PersonProto);
jane.name = 'Jane';
console.log(jane.describe());  // Person named Jane

/*
 #Reading the prototype of an object
 */
console.log(Object.getPrototypeOf(jane));  // { describe: [Function] }
console.log(Object.getPrototypeOf(jane) === PersonProto);  // true

/*
 #Checking whether one object is a prototype of another one
 */
console.log(PersonProto.isPrototypeOf(jane));  // true;
var A = {};
var B = Object.create(A);
var C = Object.create(B);
console.log(A.isPrototypeOf(C));  // true
console.log(C.isPrototypeOf(A));  // false

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

var target = getDefiningObject(jane, 'describe');
console.log(target);  // { describe: [Function] }
console.log(target === PersonProto);  // true
