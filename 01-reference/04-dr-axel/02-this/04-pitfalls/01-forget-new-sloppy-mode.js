/*
 If you invoke a constructor and forget the new operator, you are accidently using it as a real function.
 Hence, this does not have the correct value. In sloppy mode, this is window and you’ll create global variables:
 */
function Point(x, y){
  this.x = x;
  this.y = y;
}
var p = Point(7, 5);  // forgot new!
console.log(p === undefined);  // true

// Global variables have been created
console.log(x);  // 7
console.log(y);  // 5
