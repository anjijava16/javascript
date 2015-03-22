// log helper
var log = function () {
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
}();

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

Patterns.namespace("Classic").Visitor = (function () {
  var Employee = function (name, salary, vacation) {

    this.getName = function () { return name; };
    this.setName = function (value) { name = value; };

    this.getSalary = function () { return salary; };
    this.setSalary = function (value) { salary = value; };

    this.getVacation = function () { return vacation; };
    this.setVacation = function (value) { vacation = value; }
  };

  return { Employee: Employee };
})();

(function run() {
  var visitor = Patterns.Classic.Visitor;

  var employees = [
    new visitor.Employee("John", 10000, 10),
    new visitor.Employee("Mary", 20000, 21),
    new visitor.Employee("Boss", 250000, 51)
  ];

  // create 'visitor' functions
  var extraSalary = function () {
    this.setSalary(this.getSalary() * 1.1)
  };

  var extraVacation = function () {
    this.setVacation(this.getVacation() + 2)
  };

  for (var i = 0, len = employees.length; i < len; i++) {

    var emp = employees[i];

    // apply 'visitor' functions
    extraSalary.apply(emp);
    extraVacation.apply(emp);

    log.add(emp.getName() + ": $" + emp.getSalary() + " and " + emp.getVacation() + " vacation days");
  }

  log.show();
})();
