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

Patterns.namespace("Classic").Factory = (function () {
  var createEmployee = function (type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;
    employee.say = function () {
      log.add(this.type + ": rate " + this.hourly + "/hour");
    }
    return employee;
  };

  var FullTime = function () {
    this.hourly = "$12";
  };
  var PartTime = function () {
    this.hourly = "$11";
  };
  var Temporary = function () {
    this.hourly = "$10";
  };
  var Contractor = function () {
    this.hourly = "$15";
  };

  return {
    createEmployee: createEmployee
  };
})();

(function run() {

  var employees = [];

  var factory = Patterns.Classic.Factory;

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }

  log.show();
})();
