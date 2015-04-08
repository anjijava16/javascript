'use strict';
/*
 #Generic Methods: Borrowing Methods from Prototypes
 Sometimes instance prototypes have methods that are useful for more objects than those that inherit from them.
 By using call(), apply() and bind(), we can make an object the receiver that is not an instance of Wine.
 */
function Wine(age){
  this.age = age;
}
Wine.prototype.incAge = function(years){
  this.age += years;
};

var chablis = new Wine(3);
chablis.incAge(1);
console.log(chablis.age);  // 4

Wine.prototype.incAge.call(chablis, 1);
console.log(chablis.age);  // 5

var john = {
  age: 51
};
Wine.prototype.incAge.call(john, 3);  // Borrowing Methods from Prototypes
console.log(john.age);  // 54

/*
 #Accessing Object.prototype and Array.prototype via literals
 */
var obj = {
  propKey: 'propValue'
};
// Calling a method generically is quite verbose
console.log(Object.prototype.hasOwnProperty.call(obj, 'propKey'));  // true
// You can make this shorter by accessing hasOwnProperty via an instance of Object, as created by an empty object literal {}.
console.log({}.hasOwnProperty.call(obj, 'propKey'));  // true

// Similarly, the following two expressions are equivalent
var str = ['a', 'b', 'c'];
console.log(Array.prototype.join.call(str, '-'));  // a-b-c
console.log([].join.call(str, '-'));  // a-b-c

/*
 #Examples of Calling Methods Generically
 These are a few examples of generic methods in use
 */
/*
 ##Use apply() to push an array instead of individual elements
 */
var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];
console.log([].push.apply(arr1, arr2));  // 4
console.log(arr1);  // [ 'a', 'b', 'c', 'd' ]
// a1.push(a2) push an array as an element
var a1 = ['1', '2'];
var a2 = ['3', '4'];
console.log(a1.push(a2));  // 3
console.log(a1);  // [ '1', '2', [ '3', '4' ] ]

/*
 ##Apply the array method join() to a string (which is not an array)
 */
console.log(Array.prototype.join.call('abc', '-'));  // a-b-c

/*
 ##Apply the array method map() to string
 */
var result = [].map.call('abc', function(x){
  return x.toUpperCase();
});
console.log(result);  // [ 'A', 'B', 'C' ]

/*
 ##Apply a string method to nonstrings. toUpperCase() converts the receiver to a string and uppercases the result
 */
console.log(String.prototype.toUpperCase.call(true));  // TRUE
console.log(String.prototype.toUpperCase.call(['a', 'b', 'c']));  // A,B,C

/*
 #Using generic array methods on plain objects gives you insight into how they work
 */
// Invoke an array method on a fake array
var fakeArray = {0: 'a', 1: 'b', 2: 'c', length: 2};
console.log(Array.prototype.join.call(fakeArray, '-'));  // a-b
// An array method transforms an object that it treats like an array
var obj = {};
console.log(Array.prototype.push.call(obj, 'hello'));  // 1
console.log(obj);  // { '0': 'hello', length: 1 }
