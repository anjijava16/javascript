/*
 __proto__ = [[Prototype]]
 */
var proto = {
  describe: function(){
    return 'name: ' + this.name;
  }
};
var obj = {
  __proto__: proto,
  name: 'obj'
};

/*
 #Inheritance
 obj inherits the property describe; you can access it as if the object itself had that property.
 Inside describe(), this is obj, which allows the method to access obj.name.
 */
console.log(obj.describe);  // [Function]
console.log(obj.describe());  // name: obj

/*
 Overriding
 In a prototype chain, a property in an object overrides a property with the same key in a “later” object.
 */
obj.describe = function(){
  return 'overridden';
};

console.log(obj.describe());  // overridden
