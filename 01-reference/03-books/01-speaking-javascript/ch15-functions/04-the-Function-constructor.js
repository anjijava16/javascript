/*
  The constructor Function() evaluates JavaScript code stored in strings. It is equivalent to function expression.
    var add = function (x, y) {
      return x + y;
    };
  However, this way of defining a function is slow and keeps code in strings (inaccessible to tools).
  Therefore, it is much better to use a function expression or a function declaration if possible.

 */
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 3));  // 5