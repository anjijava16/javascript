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

Patterns.namespace("Classic").Memento = (function () {
  var hydratable = {
    hydrate: function () {
      this.memento = JSON.stringify(this);
    },
    dehydrate: function () {

      if (this.memento) {
        var m = JSON.parse(this.memento);
        for (var prop in m) this[prop] = m[prop];

        this.memento = null;
      }
    },

    memento: null
  };

  var makeHydratable = function (obj) {
    for (var prop in hydratable) {
      obj[prop] = hydratable[prop];
    }
    return obj;
  };

  return {
    makeHydratable: makeHydratable
  }
})();

(function run() {
  var Person = function (name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
  var john = new Person("John Wang", "48th Street", "San Jose", "CA");

  Patterns.Classic.Memento.makeHydratable(mike);
  Patterns.Classic.Memento.makeHydratable(john);

  // save state
  mike.hydrate();
  john.hydrate();

  // mess up their names
  mike.name = "King Kong";
  john.name = "Superman";

  // restore original state

  mike.dehydrate();
  john.dehydrate();

  log.add(mike.name);
  log.add(john.name);

  log.show();
})();
