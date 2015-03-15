/*
 If you call a sloppy-mode method as a function,
 this refers to the global object and global variables will be created.
 */

/** Similar to setTimeout() and setImmediate() */
function callIt(func){
  func();
}

var counter = {
  count: 0,
  // Sloppy-mode method
  inc: function(){
    this.count++;
  }
};

callIt(counter.inc);

// Didn't work
console.log(counter.count);  // 0

// Instead, a global variable has been created
// (NaN is result of applying ++ to undefined);
console.log(count);
