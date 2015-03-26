// null
console.log(Object(null));  // {}
console.log(Object(null) instanceof Object);  // true
console.log(Object);  // [Function: Object]

// boolean - false
console.log(Object(false));  // {}
console.log(Object(false) instanceof Boolean);  // true
console.log(Boolean);  // [Function: Boolean]

// object
var obj = {};
console.log(Object(obj));  // {}
console.log(Object(obj) === obj);  // true

/*
 You can also invoke Object as a constructor, which produces the same results as calling it as a function
 */
var obj = {};
console.log(new Object(obj) === obj);  // true
console.log(new Object(123) instanceof Number);  // true
