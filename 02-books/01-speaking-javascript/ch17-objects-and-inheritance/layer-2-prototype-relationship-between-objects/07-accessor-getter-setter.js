'use strict';
/*
 #Defining Accessors via an Object Literal
 */
var obj = {
  get foo(){
    return 'getter';
  },
  set foo(value){
    console.log('setter: ' + value);
  }
};
obj.foo = 'bla';  // setter: bla
console.log(obj.foo);  // getter

/*
 #Defining Accessors via Property Descriptors
 An alternate way to specify getters and setters is via property descriptors.
 The following code defines the same object as the preceding literal.
 */
var obj = Object.create(
  Object.prototype, {  // object with property descriptors
    foo: {  // property descriptor
      get: function(){
        return 'getter';
      },
      set: function(value){
        console.log('setter: ' + value);
      }
    }
  }
);
obj.foo = 'bla';  // setter: bla
console.log(obj.foo);  // getter

/*
 #Accessors and Inheritance
 Getters and setters are inherited from prototype
 */
var proto = {
  get foo(){
    return 'hello';
  }
};
var obj = Object.create(proto);
console.log(obj.foo);  // hello
