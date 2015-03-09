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

Patterns.namespace("Classic").Template = (function () {
  var datastore = {
    process: function () {
      this.connect();
      this.select();
      this.disconnect();
      return true;
    }
  };
  return {datastore: datastore};
})();

Patterns.namespace("Utils").Common = (function () {
  var inherit = function (proto) {
    var F = function () {
    };
    F.prototype = proto;
    return new F();
  };
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
  return {
    inherit: inherit,
    log: log
  }
})();

(function run() {
  var utils = Patterns.Utils.Common;
  var store = Patterns.Classic.Template.datastore;
  var mySql = utils.inherit(store);

  // implement template steps
  mySql.connect = function () {
    utils.log.add("MySQL: connect step");
  };
  mySql.select = function () {
    utils.log.add("MySQL: select step");
  };
  mySql.disconnect = function () {
    utils.log.add("MySQL: disconnect step");
  };

  mySql.process();
  utils.log.show();
})();
