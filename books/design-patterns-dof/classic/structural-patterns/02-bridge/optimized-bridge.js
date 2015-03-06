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

Patterns.namespace("Classic").Bridge = (function () {
  return {
    // RefinedAbstraction
    // input devices
    Gestures: function (output) {
      this.tap = function () {
        output.click();
      }
      this.swipe = function () {
        output.move();
      }
      this.pan = function () {
        output.drag();
      }
      this.pinch = function () {
        output.zoom();
      }
    },

    Mouse: function (output) {
      this.click = function () {
        output.click();
      }
      this.move = function () {
        output.move();
      }
      this.down = function () {
        output.drag();
      }
      this.wheel = function () {
        output.zoom();
      }
    },

    // ConcreteImplementor
    // output devices
    Screen: function () {
      this.click = function () {
        log.add("Screen select");
      }
      this.move = function () {
        log.add("Screen move");
      }
      this.drag = function () {
        log.add("Screen drag");
      }
      this.zoom = function () {
        log.add("Screen zoom in");
      }
    },

    Audio: function () {
      this.click = function () {
        log.add("Sound oink");
      }
      this.move = function () {
        log.add("Sound waves");
      }
      this.drag = function () {
        log.add("Sound screetch");
      }
      this.zoom = function () {
        log.add("Sound volume up");
      }
    }
  }
})();

(function run() {

  var bridge = Patterns.Classic.Bridge;

  var screen = new bridge.Screen();
  var audio = new bridge.Audio();

  var hand = new bridge.Gestures(screen);
  var mouse = new bridge.Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();

  log.show();
})();
