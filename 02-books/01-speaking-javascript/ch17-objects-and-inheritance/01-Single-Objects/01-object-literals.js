var jane = {
  name: 'Jane',
  describe: function(){
    return 'Person named ' + this.name; // use this in methods to refer to the current object
  }
};

/*
 The dot operator provides a compact syntax for accessing properties. The property keys must be identifiers.
 If you want to read or write properties with arbitrary names, you need to use the bracket operator (see Bracket Operator ([]):
 Accessing Properties via Computed Keys).
 */

/*
  #Getting properties
  The dot operator lets you "get" a property
 */
console.log(jane.name);  // get property 'name' - 'Jane'
console.log(jane.describe);  // get property 'describe' - [Function]
/*
  Getting a property that doesn't exist returns undefined
 */
console.log(jane.unknownProperty);  // undefined


/*
  #Calling methods
  The dot operator is also used to call methods
 */
console.log(jane.describe());  // Person named Jane

/*
  #Setting properties
  You can use the assignment operator (=) to set the value of a property referred to via to the dot notation.
  If a property doesn't exist yet, setting it auto creates it. If a property already exists, setting it changes its value.
 */
jane.name = 'John';  // set property 'name'
console.log(jane.describe());  // Person named John

/*
  #Deleting properties
  The delete operator lets you completely remove a property (the whole key-value pair) from an object.
 */
var obj = {hello: 'world'};
console.log(delete obj.hello);  // true
console.log(obj.hello);  // undefined
// If you merely set a property to undefined, the property still exists and the object still contains its key
var obj = {foo: 'a', bar: 'b'};
obj.foo = undefined;
console.log(Object.keys(obj));  // [ 'foo', 'bar' ]
console.log(delete obj.foo);  // true
console.log(Object.keys(obj));  // [ 'bar' ]

/*
  #The return value of delete
 delete returns false if the property is an own property, but cannot be deleted. It returns true in all other cases.
 */
var obj = {};
Object.defineProperty(obj, 'canBeDeleted', {
  value: 123,
  configurable: true
});
Object.defineProperty(obj, 'cannotBeDeleted', {
  value: 456,
  configurable: false
});
console.log(delete obj.cannotBeDeleted);  // false
console.log(delete obj.doesNotExist);  // true
console.log(delete obj.canBeDeleted);  // true
// delete returns true even if it doesn't change anything (inherited properties are never removed)
console.log(delete obj.toString);  // true
console.log(obj.toString);  // still here - [Function: toString]
