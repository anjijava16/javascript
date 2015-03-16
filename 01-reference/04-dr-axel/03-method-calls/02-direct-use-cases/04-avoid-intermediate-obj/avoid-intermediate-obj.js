/*
 Applying an array method such as join() to a string normally involves two steps.
 Note that the direct calls may be more efficient, but they are also much less elegant.
 */
var dispatchedJoin = (function(){
  console.log('#dispatchedJoin');

  var str = 'abc';
  var arr = str.split('');     // step 1 - [ 'a', 'b', 'c' ]
  console.log(arr);
  var joined = arr.join('-');  // step 2 - a-b-c
  console.log(joined);
})();

/*
 Strings are array-like and can become the this value of generic array methods.
 Therefore, a direct call lets you avoid step 1.
 */
var directJoin = (function(){
  console.log('#directJoin');

  var str = 'abc';
  var joined = Array.prototype.join.call(str, '-');
  console.log(joined);
})();

var map = (function(){
  console.log('#map method');

  console.log('##dispatched');
  function toUpper(x){
    return x.toUpperCase();
  }
  console.log('abc'.split('').map(toUpper));              // 2 steps - [ 'A', 'B', 'C' ]

  console.log('##direct');
  console.log(Array.prototype.map.call('abc', toUpper));  // 1 step - [ 'A', 'B', 'C' ]
})();
