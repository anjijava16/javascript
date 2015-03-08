// log helper
var log = (function(){
  var log = "";
  return {
    add: function(msg) {log += msg + "\n"; },
    show: function() {console.log(log); log = "";}
  }
})();
function Employee(name){
  this.name = name;
  this.say = function(){
    log.add("I am employee " + name);
  }
}
function EmployeeFactory(){
  this.create = function(name){
    return new Employee(name);
  }
}
function Vendor(name){
  this.name = name;
  this.say = function(){
    log.add("I am vendor " + name);
  }
}
function VendorFactory(){
  this.create = function(name){
    return new Vendor(name);
  }
}

(function run(){
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  persons.push(employeeFactory.create("Tom"));
  persons.push(employeeFactory.create("Dick"));

  var vendorFactory = new VendorFactory();
  persons.push(vendorFactory.create("Will"));
  persons.push(vendorFactory.create("Harry"));

  var len = persons.length;
  for(var i = 0; i < len; i++){
    persons[i].say();
  }

  log.show();
})();
