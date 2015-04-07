'use strict';
function Person(name){
  console.log(this);  // { id: 123 }
  this.name = name;
}
Person.prototype.describe = function(){
  return 'Person called ' + this.name;
};

function Employee(name, title){
  this.id = 123;
  console.log(this);  // { id: 123 }
  Person.call(this, name);
  this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function(){
  return Person.prototype.describe.call(this) + ' (' + this.title + ')';
};

var jane = new Employee('Jane', 'CTO');
console.log(jane.describe());  // Person called Jane (CTO)
console.log(jane instanceof Employee);  // true
console.log(jane instanceof Person);  // true
