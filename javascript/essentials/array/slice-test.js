// Return a portion of an existing array
// Our good friend the citrus from fruits example
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// citrus contains ['Orange','Lemon']
console.log(citrus);

//convert Array-like objects / collections to a new Array
function list() {
  console.log(arguments);
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
console.log(list1);
