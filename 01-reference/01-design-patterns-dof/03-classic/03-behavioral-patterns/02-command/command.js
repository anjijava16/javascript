/*
 Encapsulate a request as an object, thereby letting you parameterize clients with different requests,
 queue or log requests, and support undoable operations.
 */

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

var AddCommand = function (value) {
  return new Command(add, sub, value);
};

var SubCommand = function (value) {
  return new Command(sub, add, value);
};

var MulCommand = function (value) {
  return new Command(mul, div, value);
};

var DivCommand = function (value) {
  return new Command(div, mul, value);
};

var Calcualtor = function () {
  var current = 0;
  var commands = [];

  function action(command) {
    console.log("#command:", command);
    console.log("#command.execute:", command.execute);
    console.log("#command.value:", command.value);
    console.log("#commands", commands);
    console.log("\n");

    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      console.log("#e-current", current);
      commands.push(command);
      log.add(action(command) + ": " + command.value);
    },
    undo: function () {
      var command = commands.pop();
      current = command.undo(current, command.value);
      console.log("#u-current", current);
      log.add("Undo " + action(command) + ": " + command.value);
    },
    getCurrentValue: function () {
      return current;
    }
  }
};

(function run() {
  var calculator = new Calcualtor();

  // issue commands
  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  // reverse last two commands
  calculator.undo();
  calculator.undo();

  log.add("\nValue: " + calculator.getCurrentValue());
  log.show();
})();
