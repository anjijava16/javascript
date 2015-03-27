// function - normal function
function id(x){
  return x;
}
console.log(id instanceof Function);  // true

// constructor
function Person(name){
  this.name = name;
  this.say = function(){
    console.log('Hi from', this.name);
  }
}
console.log(Person instanceof Function);  // true

// method - a property of an object
var tom = new Person("Tom");
tom.say();
console.log(new Person("Tom").say instanceof Function);
