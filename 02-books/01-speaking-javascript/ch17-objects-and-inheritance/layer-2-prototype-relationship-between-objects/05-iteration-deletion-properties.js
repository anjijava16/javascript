var PersonProto = {
  describe: function(){
    return 'Person named ' + this.name;
  }
};

var jane = Object.create(PersonProto);
jane.name = 'Jane';
jane.age = 10;

/*
 #Listing Own Property Keys
 */
console.log(Object.getOwnPropertyNames(jane));  // [ 'name', 'age' ]
console.log(Object.keys(jane));  // [ 'name', 'age' ]

/*
 #Listing All Property Keys
 */
// Option 1: use for loop
for(var key in jane){
  console.log(key);
}
/*
 name
 age
 describe
 */

// Option 2: implement a function that iterates over all properties.
function getAllPropertyNames(obj){
  var result = [];
  while(obj){
    // Add the own property names of 'obj' to 'result'
    result = result.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return result;
}
console.log(getAllPropertyNames(jane));
/*
 [ 'name',
 'age',
 'describe',
 'constructor',
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

/*
 #Checking Whether a Property Exists
 */
// propKey in obj Returns true if obj has a property whose key is propKey. Inherited properties are included in this test.
console.log('name' in jane);  // true
console.log('describe' in jane);  // true

// Object.prototype.hasOwnProperty(propKey) Returns true if the receiver (this) has an own property whose key is propKey.
console.log(Object.prototype.hasOwnProperty.call(jane, 'name'));  // true
console.log(Object.prototype.hasOwnProperty.call(jane, 'describe'));  // false
