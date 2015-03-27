/*
  It is equivalent to function expression.
  In other words, a function declaration declares a new variable, creates a function object, and assigns it to the variable.
    var add = function (x, y) {
      return x + y;
    };
 */
function add(x, y){
  return x + y;
}
console.log(add(2, 3));  // 5
