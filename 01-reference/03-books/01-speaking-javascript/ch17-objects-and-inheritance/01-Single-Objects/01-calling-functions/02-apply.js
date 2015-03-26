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
// below needs to repeat jane because apply() doesn't know how you got the function that it is invoked on.
jane.sayHelloTo.apply(jane, ['Tarzan']);  // Jane says hello to Tarzan
var func = jane.sayHelloTo;
func.apply(jane, ['Tarzan']);  // Jane says hello to Tarzan
