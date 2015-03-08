var log = (function(){
  var log = "";
  return {
    add: function(msg){log += msg + "\n";},
    show: function(){console.log(log); log = "";}
  }
})();
var Patterns = {
  namespace: function(name){
    var parts = name.split(".");
    var ns = this;

    var len = parts.length;
    for(var i = 0; i < len; i++){
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }

    return ns;
  }
};

Patterns.namespace("Classic").AbstractFactory = (function(){
  var Employee = function(name){
    this.name = name;
    this.say = function(){
      log.add("I am employee " + name);
    }
  };

  var Vendor = function(name){
    this.name = name;
    this.say = function(){
      log.add("I am vendor " + name);
    }
  };

  var EmployeeFactory = function(){
    this.create = function(name){
      return new Employee(name);
    }
  };

  var VendorFactory = function(){
    this.create = function(name){
      return new Vendor(name);
    }
  };

  return {
    EmployeeFactory: EmployeeFactory,
    VendorFactory: VendorFactory
  };
})();

(function run(){
  var persons = [];

  var abstract = Patterns.Classic.AbstractFactory;

  var employeeFactory = new abstract.EmployeeFactory();
  persons.push(employeeFactory.create("Tom"));
  persons.push(employeeFactory.create("Dick"));

  var vendorFactory = new abstract.VendorFactory();
  persons.push(vendorFactory.create("Will"));
  persons.push(vendorFactory.create("Harry"));

  var len = persons.length;
  for(var i = 0; i < len; i++){
    persons[i].say();
  }

  log.show();
})();
