var result1 = [1, 2, 3].map(function(x){
  return x * x;
});
console.log(result1);  // [ 1, 4, 9 ]
console.log(parseInt('1024'));  // 1024

var result2 = ['1', '2', '3'].map(parseInt);
console.log(result2);   // [ 1, NaN, NaN ]

/*
 Thus, map() not only fills in string (via element), but also radix (via index).
 That means that the values of the preceding array are produced as follows:
 */
console.log(parseInt('1', 0));  // 1
console.log(parseInt('2', 0));  // NaN
console.log(parseInt('3', 2));  // NaN

// solution - It is achieved via a callback
var result3 = ['1', '2', '3'].map(function (x) { return parseInt(x) });
console.log(result3);  // [ 1, 2, 3 ]
