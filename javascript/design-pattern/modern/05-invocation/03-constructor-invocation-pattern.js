// Invoking a constructor function with the new operator create a new object. Not surprisingly,
// the this variable will be bound to the newly created object.
//
// These are three steps. First a new object is created which is then bound to this.
// Next, the function body executes and properties and methods are added to the object. And,
// finally, the constructor function implicitly returns the newly created object.
//
// Invoking a constructor function without the new operator changes the Invocation pattern
// from a Constructor Invocation pattern to a Function Invocation pattern that binds “this” to the global object,
// so forgetting the new can be a serious problem. We can use ('use strict';) the keyword to address forgetting the new issue.

  var Calculator = function(){
  this.total = 0;
  this.add = function(x) {this.total += x;};
  this.sub = function(x) {this.total -= x;};
  this.show = function() { console.log("total = " + this.total); }
}

var calc = new Calculator();   // constructor invocation
calc.add(10);
calc.show();   // total = 10

calc.sub(6);
calc.show();   // total = 4
