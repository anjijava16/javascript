/*
 Real functions (this is the global object in sloppy mode, undefined in strict mode)
 Constructors (this refers to the newly created instance)

 bind() created a new function that always receives a this whose value is counter.
 */

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

callIt(counter.inc.bind(counter));

// It worked!
console.log(counter.count);  // 1
