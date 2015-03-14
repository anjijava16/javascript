// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      console.log(log);
      log = "";
    }
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

Patterns.namespace("Classic").Strategy = (function () {
  var Shipping = function () {
    var company = "";

    this.setStrategy = function (name) {
      if (name === "UPS") {
        company = new UPS();
      } else if (name === "USPS") {
        company = new USPS();
      } else if (name === "Fedex") {
        company = new Fedex();
      }
    };

    this.calculate = function (package) {
      return company.calculate(package);
    }
  };

  var UPS = function () {
    this.calculate = function (package) {
      // calculations...
      return "$45.95";
    }
  };

  var USPS = function () {
    this.calculate = function (package) {
      // calculations...
      return "$39.40";
    }
  };
  var Fedex = function () {
    this.calculate = function (package) {
      // calculations...
      return "$43.20";
    }
  };

  return { Shipping: Shipping };
})();

(function run() {
  var shipping = new Patterns.Classic.Strategy.Shipping();

  var package = { from: "76712", to: "10012", weigth: "lkg" };

  // the 3 strategies
  shipping.setStrategy("UPS");
  log.add("UPS Strategy: " + shipping.calculate(package));

  shipping.setStrategy("USPS");
  log.add("USPS Strategy: " + shipping.calculate(package));

  shipping.setStrategy("Fedex");
  log.add("Fedex Strategy: " + shipping.calculate(package));

  log.show();
})();
