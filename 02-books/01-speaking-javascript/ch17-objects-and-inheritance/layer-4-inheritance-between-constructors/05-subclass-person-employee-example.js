'use strict';

function copyOwnPropertiesFrom(target, source){
  Object.getOwnPropertyNames(source)
    .forEach(function(propKey){
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}

function subclasses(SubC, SuperC){
  // subProto = subProto.describe() + subProto._proto_.describe()
  var subProto = Object.create(SuperC.prototype);  // subProto._proto_.describe()
  // Save 'constructor' and, possibly, other methods
  copyOwnPropertiesFrom(subProto, SubC.prototype);  // subProto.describe()

  SubC.prototype = subProto;  // subProto = subProto.describe() + subProto._proto_.describe()
  SubC._super = SuperC.prototype;
}

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
  Employee._super.constructor.call(this, name);
  this.title = title;
}
Employee.prototype.describe = function(){
  return Employee._super.describe.call(this) + ' (' + this.title + ')';
};

subclasses(Employee, Person);

var jane = new Employee('Jane', 'CTO');
console.log(jane.describe());  // Person called Jane (CTO)
console.log(jane instanceof Employee);  // true
console.log(jane instanceof Person);  // true
