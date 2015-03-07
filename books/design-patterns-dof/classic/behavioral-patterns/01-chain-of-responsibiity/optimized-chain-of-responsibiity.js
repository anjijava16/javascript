// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

function Flyweight(make, model, processor){
  this.make = make;
  this.model = model;
  this.processor = processor;
};

var Patterns = {
  namespace: function (name) {
    var parts = name.split(".");
    var ns = this;

    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }

    return ns;
  }
};

Patterns.namespace("Classic").Chain = (function () {
  var Request = function(amount){
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
  };

  Request.prototype = {
    get: function(bill){
      var count = Math.floor(this.amount / bill);
      this.amount -= count * bill;
      log.add("Dispense " + count + " $" + bill + " bills");
      return this;
    }
  };
  return {
    Request: Request
  }
})();

(function run() {
  var chain = Patterns.Classic.Chain;

  var request = new chain.Request(378);
  request.get(100).get(50).get(20).get(10).get(5).get(1);

  log.show();
})();
