/*
 To fix things, we need to make a snapshot of the index i before creating a function that uses it.

 Create a new environment for each function in the returned array.
 Store (a copy of) the current value of i in that environment.
 */
function f(){
  var result = [];
  for(var i = 0; i < 3; i++){
    (function(){  // step 1: IIFE
      var pos = i;  // step 2: copy
      var func = function(){
        return pos;
      };
      result.push(func);
    }());
  }
  return result;
}
console.log(f()[1]());  // 1
