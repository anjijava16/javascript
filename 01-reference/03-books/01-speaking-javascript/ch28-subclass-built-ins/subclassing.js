// ===============prototype==============
function Super(x, y){
  this.x = x;
  this.y = y;
}
function Sub(x, y, z){
  // Add superproperties to subinstance
  Super.call(this, x, y);
  // Add subproperty
  this.z = z;
}
// ===============real world example==============
// ---Base class---
function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype = {
  say: function(){
    console.log('Hi from', this.name);
  }
}
// ---Sub class---
function Employee(name, age, salary){
  // Add superproperties to subinstance
  Person.call(this, name, age);
  // Add subproperty
  this.salary = salary;
}
// Copy super prototype to sub prototype
Employee.prototype = Object.create(Person.prototype);

// ---Usage---
var employee = new Employee("Tom", 10, "$35,000");
console.log(employee.name);
console.log(employee.salary);
employee.say();
var person = new Person("Harry", 20);
person.say();
console.log(new Employee() instanceof Person);
console.log(new Employee() instanceof Employee);
