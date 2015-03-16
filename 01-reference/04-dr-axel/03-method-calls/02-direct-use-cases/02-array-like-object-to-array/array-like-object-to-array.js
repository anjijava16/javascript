/*
 Some objects in JavaScript are array-like, they are almost arrays, but don’t have any of the array methods.
 */

/*
 Array-like object has a length and indexed access to elements.
 But arguments isn’t an instance of Array and does not have the method forEach().
 */
var issue = (function(){
  console.log('#issue');
  var args = function() {
    return arguments;
  }('a', 'b');

  console.log(args.length);            // 2
  console.log(args[0]);                // a
  console.log(args instanceof Array);  // false
  console.log(args.forEach)            // undefined
})();

/*
 Convert array-like objects to arrays first. That is achieved via Array.prototype.slice().
 This method copies the elements of its receiver into a new array:
 */
var objToArray = (function(){
  console.log('#objToArray');
  var arr = ['a', 'b'];
  console.log(arr.slice());
  console.log(arr.slice() === arr);  // false

  /*
   convert arguments to an array
   */
  var args = Array.prototype.slice.call(function() {
    return arguments;
  }('a', 'b'));

  console.log(args instanceof Array);  // true
  args.forEach(function(arg){
    console.log(arg);
  });
})();
