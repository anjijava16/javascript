// When the project becomes big, you can split the module into multiple modules on multiple files.
// A disadvantage is each file has its own private state which is not shared with other Partial modules.

var module = (function(self){
  var top = 1;   // not shared with other Partial modules
  self.multiply = function(x, y){return x * y; };
  self.divide = function(x, y) {return x /y; };
  self.getTop1 = function() {return top;};
  return self;
})(module || {});

console.log(module.multiply(2, 3));

var module = (function(self){
  var top = 2;   // not shared with other Partial modules
  self.add = function(x, y){return x + y; };
  self.getTop2 = function() {return top;};
  // we can use override the previous module.getTop1()
  //self.getTop1 = function() {return 8;};
  return self;
})(module || {});

console.log(module.add(1, 2));
console.log(module.getTop1());
console.log(module.getTop2());
