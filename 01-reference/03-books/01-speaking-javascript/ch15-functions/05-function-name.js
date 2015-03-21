// function declaration
function f1(){}
console.log(f1.name);  // f1

// function expression
var f2 = function() {};
console.log("'" + f2.name + "'");  //  ''

// named function expression
/*
  The name of a function is useful for debugging. Some people always give their function expressions names for that reason.
 */
var f3 = function myName(){};
console.log(f3.name);  //  myName
