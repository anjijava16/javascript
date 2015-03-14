exports.Patterns = {
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

exports.Patterns.namespace("Utils").Common = (function () {
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
