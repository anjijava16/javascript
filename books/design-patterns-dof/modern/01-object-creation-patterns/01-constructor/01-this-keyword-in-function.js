//The this keyword in function body is bound to the object that is being created and is called the context of function.
function Person(name){
  this.name = name;
  this.say = function(){
    console.log(this.name);
  };
}

var tom = new Person('Tom');
var dick = new Person('Dick');

console.log(tom);
tom.say();
dick.say();
