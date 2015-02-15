// Inherit instance properties
function Person(name){
  this.name = name;
  this.aka = 'aka';
  this.print = function(){
    console.log('print hello from ' + this.name);
  }
};

// Employee subclass Person
function Employee(name, title){
  Person.call(this, name);
  this.title = title;
}

var employee = new Employee('Ken', 'QA');
console.dir(employee);
//employee.print();