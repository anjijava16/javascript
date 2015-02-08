// set the derived object's prototype property to an instance of the base object.

function inherit(source){
  function F() {};
  F.prototype = source;
  return new F();
}

var person = {
  color: "brown",
  say: function(){
    console.log("Hi, I have " + this.color + " eyes");
  }
};

var employee = inherit(person);
employee.salary = "$35,000";

employee.say();
