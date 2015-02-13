// When an object's method is invoked, "this" value is bound to the object instance.

var calculator = {
  total: 0,
  add: function(x) {this.total += x;},
  sub: function(x) {this.total -= x;},
  show: function() { console.log("total = " + this.total); }
}

calculator.add(10);  // method invocation
calculator.show();   // method invocation - total = 10

calculator.sub(6);   // method invocation
calculator.show();   // method invocation - total = 4
