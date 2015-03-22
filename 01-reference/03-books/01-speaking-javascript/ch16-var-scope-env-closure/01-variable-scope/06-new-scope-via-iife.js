/*
 If you want to introduce a new scope for the then block, you can define a function and immediately invoke it.
 This is a workaround, a simulation of block scoping.
 An IIFE costs performance and cognitively.
 */
'use strict';
function f(condition){
  if(condition){
    (function(){  // open IIFE
      var tmp = 'block scope';  // inside IIFE
      console.log(tmp);  // 'block scope'
    })();  // close IIFE
  }
  try{
    console.log(tmp);
  }
  catch (e){
    console.log(e);  // [ReferenceError: tmp is not defined]
  }
}
f(true);
