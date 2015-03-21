/*
 func.bind(thisValue, arg1, ..., argN)
 This performs partial function application—a new function is created that calls func with this set to thisValue and the following arguments:
 first arg1 until argN, and then the actual arguments of the new function. thisValue is not needed in the following non-object-oriented setting,
 which is why it is null.
 Here, we use bind() to create a new function plus1() that is like add(), but only requires the parameter y, because x is always 1:
 */
function add(x, y){
  return x + y;
}
var plus1 = add.bind(null, 1);
console.log(plus1(5));  // 6

/*
 We have created a new function that is equivalent to the following code.
 function plus1(y) {
   return add(1, y);
 }
 */