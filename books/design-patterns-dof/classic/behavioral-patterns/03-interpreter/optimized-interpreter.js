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

Patterns.namespace("Classic").Interpreter = (function () {
  var Context = function (input) {
    this.input = input;
    this.output = 0;
  };

  Context.prototype = {
    startsWith: function (str) {
      return this.input.substr(0, str.length) === str;
    }
  };

  var Expression = function (name, one, four, five, nine, multiplier) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
  };

  Expression.prototype = {
    interpret: function (context) {
      if (context.input.length == 0) {
        return;
      }
      else if (context.startsWith(this.nine)) {
        context.output += (9 * this.multiplier);
        context.input = context.input.substr(2);
      }
      else if (context.startsWith(this.four)) {
        context.output += (4 * this.multiplier);
        context.input = context.input.substr(2);
      }
      else if (context.startsWith(this.five)) {
        context.output += (5 * this.multiplier);
        context.input = context.input.substr(1);
      }

      while (context.startsWith(this.one)) {
        context.output += (1 * this.multiplier);
        context.input = context.input.substr(1);
      }
    }
  };

  function evaluate(roman) {
    var tree = [];
    var context = new Context(roman);

    tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
    tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
    tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
    tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
      tree[i].interpret(context);
    }

    return context.output;
  }

  return {
    evaluate: evaluate
  };

})();

(function run() {
  var roman = "MCMXXVIII";
  var result = Patterns.Classic.Interpreter.evaluate(roman);

  console.log(roman + " = " + result);
})();
