// Function expressions
var add = function(x, y){
  return x + y;
};
console.log(add(2, 3));  // 5

/*
 Named function expressions
 You can give a function expression a name.
 Named function expressions allow a function expression to refer to itself, which is useful for self-recursion.
 Note: The name of a named function expression is only accessible inside the function expression.
 */
var fac = function me(n){
  if(n > 0){
    return n * me(n -1);
  }
  else{
    return 1;
  }
};
console.log(fac(3));  // 6
