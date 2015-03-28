var counter = {
  count: 0,
  inc: function(){
    this.count++;
  }
};

/*
 Extracting inc and calling it (as a function!) fails
 */
var func = counter.inc;
func();
console.log(counter.count);  // 0

/*
 We have called the value of counter.inc as a function. Hence, this is the global object and we have performed window.count++.
 window.count does not exist and is undefined. Applying the ++ operator to it sets it to NaN.
 */
console.log(count);  // NaN

/*
 If method inc() is in strict mode, you get a warning.
 */
counter.inc = function(){
  'use strict';
  this.count++;
};

var func2 = counter.inc;
try{
  func2();
}
catch(e){
  console.log(e);  // [TypeError: Cannot read property 'count' of undefined]
}


var func3 = counter.inc.bind(counter);
console.logfunc3()