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

Patterns.namespace("Classic").Command = (function () {
  function add(x, y) {
    return x + y;
  }
  function sub(x, y) {
    return x - y;
  }
  function mul(x, y) {
    return x * y;
  }
  function div(x, y) {
    return x / y;
  }
  var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  };
  return {
    AddCommand: function (value) {
      return new Command(add, sub, value);
    },

    SubCommand: function (value) {
      return new Command(sub, add, value);
    },

    MulCommand: function (value) {
      return new Command(mul, div, value);
    },

    DivCommand: function (value) {
      return new Command(div, mul, value);
    },

    Calculator: function () {
      var current = 0;
      var commands = [];

      function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
      }

      return {
        execute: function (command) {

          current = command.execute(current, command.value);
          commands.push(command);

          log.add(action(command) + ": " + command.value);
        },
        undo: function () {
          var command = commands.pop();
          current = command.undo(current, command.value);

          log.add("Undo " + action(command) + ": " + command.value);
        },
        getCurrentValue: function () {
          return current;
        }
      }
    }
  }
})();

(function run() {

  var command = Patterns.Classic.Command;

  var calculator = new command.Calculator();

  // issue commands
  calculator.execute(new command.AddCommand(100));
  calculator.execute(new command.SubCommand(24));
  calculator.execute(new command.MulCommand(6));
  calculator.execute(new command.DivCommand(2));

  // reverse last two commands
  calculator.undo();
  calculator.undo();

  log.add("\nValue: " + calculator.getCurrentValue());

  log.show();
})();
