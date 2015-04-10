/*
 create array via an array literal and access elements
 */
var arr = ['a', 'b', 'c'];  // array literal
console.log(arr[0]);  // a - get element 0
arr[0] = 'x';  // set element 0
console.log(arr);  // [ 'x', 'b', 'c' ]

/*
 use array property length to remove and append elements
 */
var arr = ['a', 'b', 'c'];
console.log(arr.length);  // 3
arr.length = 2;
console.log(arr);  // [ 'a', 'b' ]
arr[arr.length] = 'd';  // append an element
console.log(arr);  // [ 'a', 'b', 'd' ]

/*
 push() provides another way of appending an element
 */
var arr = ['a', 'b'];
console.log(arr.push('d'));  // 3
console.log(arr);  // [ 'a', 'b', 'd' ]

/*
 #Arrays Are Maps, Not Tuples
 Arrays are maps (dictionaries) from indices to values.
 In other words, arrays may not be contiguous and can have holes in them.
 */
var arr = [];
arr[0] = 'a';
arr[2] = 'b';
console.log(arr);  // [ 'a', , 'b' ]
