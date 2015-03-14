/*
 In methods, things are similar to more traditional object-oriented languages:
 this refers to the receiver, the object on which the method has been invoked.
 */
var obj = {
  method: function(){
    console.log(this === obj);  // true
  }
};
obj.method();
