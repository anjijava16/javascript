/*
 Some functions accept multiple values, but only one value per parameter.
 What if you want to pass the values via an array?
 */

/*
 push() lets you destructively append several values to an array.
 */
var dispatched = (function(){
  console.log('#dispatched example');
  var arr = ['a', 'b'];
  arr.push('c', 'd');
  console.log(arr);                 // [ 'a', 'b', 'c', 'd' ]

  console.log(Math.max(-1, 7, 2));  // 7
})();

var apply = (function(){
  console.log('#apply example');
  var arr = ['a', 'b'];
  Array.prototype.push.apply(arr, ['c', 'd']);
  console.log(arr);                               // [ 'a', 'b', 'c', 'd' ]

  console.log(Math.max.apply(null, [-1, 7, 2]));  // 7
})();
