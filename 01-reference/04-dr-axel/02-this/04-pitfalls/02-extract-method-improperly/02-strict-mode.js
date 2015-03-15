/*
 If you call a strict-mode method as a function, this is undefined.
 Things don’t work, either. But at least you get a warning:
 */

'use strict';

/** Similar to setTimeout() and setImmediate() */
function callIt(func){
  func();
}

var counter = {
  count: 0,
  inc: function(){
    this.count++;
  }
};

callIt(counter.inc);

// TypeError: cannot read property 'count' of undefined
console.log(counter.count);
