function Calculator(start){
  var total = start || 0;
  this.add = function(x) {total += x; return this;};
  this.sub = function(x) {total -= x; return this;};
  this.mul = function(x) {total *= x; return this;};
  this.div = function(x) {total /= x; return this;};
  this.get = function() {return total;};
}

var calc = new Calculator(10).add(8).div(2).mul(4).sub(30).add(100);
console.log(calc.get());
