function func(){
  console.log('tihs: ' + this);
  console.log('arguments: ' + Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1, 2);
bound(3);
/*
 tihs: abc
 arguments: 1,2,3
 */

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
jane.sayHelloTo('Tarzan');
var func1 = jane.sayHelloTo.bind(jane);
func1('Tarzan');
var func2 = jane.sayHelloTo.bind(jane, 'Tarzan');
func2();
