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

Patterns.namespace("Classic").State = (function () {
  var TrafficLight = function(){
    var Red = function(){
      this.go = function(){
        log.add("Red --> for 1 minute");
        change(new Green());
      }
    };
    var Yellow = function () {
      this.go = function () {
        log.add("Yellow --> for 10 seconds");
        change(new Red());
      }
    };
    var Green = function () {
      this.go = function () {
        log.add("Green --> for 1 minute");
        change(new Yellow());
      }
    };
    var count = 0;
    var currentState = new Red();
    var change = function(state){
      // limits number of changes
      if(count++ >= 10)return;
      currentState = state;
      currentState.go();
    };
    this.start = function(){
      currentState.go();
    };
  };
  return {
    TrafficLight: TrafficLight
  };
})();

(function run() {
  var light = new Patterns.Classic.State.TrafficLight();
  light.start();

  log.show();
})();
