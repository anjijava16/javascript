/*
  You can use parameters to define variables for the inside of the IIFE
 */
var x = 23;
(function(twice){
  console.log(twice);  // 46
}(x * 2));
/*
 This is similar to:
 var x = 23;
 (function () {
   var twice = x * 2;
   console.log(twice);
 }());
 */
