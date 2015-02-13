// A Ghost object is one that is only partially loaded and when called upon will load itself completely.
// Note: This code does not account for the asynchronous nature of Ajax. It requires some sort of callback mechanism.

var Employee = function(id, name, thumbnail){
  this.id = id;
  this.name = name;
  this.thumbnail = thumbnail;

  this.ghost = true;

  this.getDepartment = function(){
    if(this.ghost) this.load();
    return this.department;
  };

  this.getSalary = function(){
    if(this.ghost) this.load();
    return this.salary;
  };

  this.getBenefits = function(){
    if(this.ghost) this.load();
    return this.benefits;
  };

  this.load = function(){
    // load using an ajax call to back-end database
    this.departyment = "Product Development";
    this.salary = "$66,400";
    this.benefits = "401(k); 21 vacation days";

    this.ghost = false;
  };
};

var employee = new Employee(211, "Nicolas Vick", "vick.jpg");
console.log(employee.name);

// get more details on employee.
console.log(employee.getDepartment());    // this is when it loads
console.log(employee.getSalary());        // fully loaded
console.log(employee.getBenefits());      // fully loaded
