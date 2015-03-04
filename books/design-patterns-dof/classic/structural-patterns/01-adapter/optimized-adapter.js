// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

// old interface
function Shipping(){
  this.request = function(zipStart, zipEnd, weight){
    // ...
    return "$49.75";
  }
}

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

Patterns.namespace("Classic").Adapter = (function () {
  // new interface
  var AdvancedShipping = function(){
    this.login = function(credentials){ };
    this.setStart = function(start){ };
    this.setDestination = function(destination){ };
    this.calculate = function(weight){
      return "$39.50";
    };
  };

  // adapter interface
  var ShippingAdapter = function(credentials){
    var shipping = new AdvancedShipping();
    shipping.login(credentials);

    return{
      request: function(zipStart, zipEnd, weight){
        shipping.setStart(zipStart);
        shipping.setDestination(zipEnd);
        return shipping.calculate(weight);
      }
    };
  };

  return {ShippingAdapter: ShippingAdapter}
})();

(function run() {

  var shipping = new Shipping();

  var credentials = { token: "30a8-6ee1" };
  var adapter = new Patterns.Classic.Adapter.ShippingAdapter(credentials);

  // original shipping object and interface
  var cost = shipping.request("78701", "10010", "2 lbs");
  log.add("Old cost: " + cost);

  // new shipping object with adapted interface
  cost = adapter.request("78701", "10010", "2 lbs");
  log.add("New cost: " + cost);

  log.show();
})();
