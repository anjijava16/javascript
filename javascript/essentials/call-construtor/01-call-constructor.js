function Person(name){
  this.name = name;
  this.print = function(){
    console.log("print hello from " + this.name);
  }
};

var tom = {};
Person.call(tom, 'Tom');
console.dir(tom);

var ken = new Person('Ken');
console.dir(ken);
