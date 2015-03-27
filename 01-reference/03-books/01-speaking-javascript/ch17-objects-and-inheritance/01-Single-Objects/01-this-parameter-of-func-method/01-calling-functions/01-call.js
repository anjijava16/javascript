var jane = {
  name: 'Jane',
  sayHelloTo: function(otherName){
    'use strict';
    console.log(this.name + ' says hello to ' + otherName);
  }
};

/*
 The following three invocations are equivalent
 */
jane.sayHelloTo('Tarzan');  // Jane says hello to Tarzan
// below needs to repeat jane because call() doesn't know how you got the function that it is invoked on.
jane.sayHelloTo.call(jane, 'Tarzan');  // Jane says hello to Tarzan
var func = jane.sayHelloTo;
func.call(jane, 'Tarzan');  // Jane says hello to Tarzan
