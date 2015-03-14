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

var Employee = function(name, salary, vacation){
  var self = this;
  self.name = name;
  self.salary = salary;
  self.vacation = vacation;
  this.accept = function(visitor){
    visitor.visit(self);
  };
  this.getName = function(){
    return self.name;
  };
  this.getSalary = function(){
    return self.salary;
  };
  this.setSalary = function(sal){
    self.salary = sal;
  };
  this.getVacation = function(){
    return self.vacation;
  };
  this.setVacation = function(vac){
    self.vacation = vac;
  };
};

var ExtraSalary = function(){
  this.visit = function(emp){
    emp.setSalary(emp.getSalary() * 1.1);
  }
};

var ExtraVacation = function(){
  this.visit = function(emp){
    emp.setVacation(emp.getVacation() + 2);
  };
};

(function run(){
  var employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51)
  ];

  var visitorSalary = new ExtraSalary();
  var visitorVacation = new ExtraVacation();

  for(var i = 0, len = employees.length; i < len; i++){
    var emp = employees[i];
    emp.accept(visitorSalary);
    emp.accept(visitorVacation);
    log.add(emp.getName() + ": $" + emp.getSalary() + " and " + emp.getVacation() + " vacation days");
  }

  log.show();
})();
