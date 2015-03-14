
function Person(name){
  this.name = name;
  this.aka = 'aka';
  this.print = function(){
    console.log('print hello from ' + this.name);
  }
}
Person.prototype.sayHelloTo = function(othername){
  console.log(this.name + " says hello to " + othername);
};
Person.prototype.describe = function(){
  return "Person named " + this.name;
};

// Employee subclass Person
function Employee(name, title){
  Person.call(this, name);   // copy Person() instance properties to Employee
  this.title = title;
}
Employee.prototype = Object.create(Person.prototype);  // copy Person.prototype to Employee.prototype
Employee.prototype.describe = function(){
  return Person.prototype.describe.call(this) + '(' + this.title + ')';
};

var jane = new Employee('Jane', 'CTO');
console.dir(employee);
/*
employee = {
  name: 'Ken',
  aka: 'aka',
  print: [Function],
  title: 'QA'
}
 */
employee.print();
