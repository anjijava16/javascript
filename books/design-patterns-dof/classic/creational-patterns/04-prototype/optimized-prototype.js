// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

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

Patterns.namespace("Classic").Prototype = (function () {
  function Customer(first, last, status){
    this.first = first;
    this.last = last;
    this.status = status;
  }
  Customer.prototype = {
    say: function(){
      log.add("name: " + this.first + " " + this.last + ", status: " + this.status);
    }
  };
  return {Customer: Customer};
})();

(function run() {
  var proto = Patterns.Classic.Prototype;

  var customer = new proto.Customer();
  customer.say();

  var kevin = new proto.Customer("Tom", "Lee", "pending");
  kevin.say();

  log.show();
})();
