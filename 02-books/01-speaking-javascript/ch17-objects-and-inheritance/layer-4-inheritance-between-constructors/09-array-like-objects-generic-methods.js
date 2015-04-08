'use strict';
/*
 #Array-Like Objects and Generic Methods
 */
// ##The special variable arguments, which is an important array-like object looks like an array.
function args(){
  return arguments;
}
var arrayLike = args('a', 'b');
console.log(arrayLike[0]);  // 'a'
console.log(arrayLike.length);  // 2
// but none of the array methods are available
try{
  arrayLike.join('-');
}
catch(e){
  console.log(e);  // [TypeError: Object #<Object> has no method 'join']
}
// That's because arrayLike is not an instance of Array
console.log(arrayLike instanceof Array);  // false

// ##Strings are array-like objects
console.log('abc'[1]);  // 'b'
console.log('abc'.length);  // 3

/*
 #Patterns for working with array-like objects
 */
// ##Turn an array-like object into an array
function args(){
  var arr = Array.prototype.slice.call(arguments);
  return arr;
}
console.log(args('x', 'y', 'z'));  // [ 'x', 'y', 'z' ]

// The method slice() without any arguments creates a copy of an array-like receiver
var source = ['a', 'b'];
var copy = source.slice();
console.log(copy);  // [ 'a', 'b' ]
console.log(source === copy);  // false
var target = source;
console.log(target);  // [ 'a', 'b' ]
console.log(source === target);  // true

// ##To iterate over all elements of an array-like object, you can use a simple for loop
function logArgs(){
  for(var i = 0; i < arguments.length; i++){
    console.log(i + '. ' + arguments[i]);
  }
}
logArgs('hello', 'world');
/*
 0. hello
 1. world
 */

function logArgs2(){
  [].forEach.call(arguments, function(elem, i){
    console.log(i + '. ' + elem);
  });
}
logArgs2('a', 'b');
/*
 0. a
 1. b
 */
