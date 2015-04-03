/*
 #Two objects that are similar
 var PersonProto = {
 describe: function () {
 return 'Person named '+this.name;
 }
 };
 var jane = {
 [[Prototype]]: PersonProto,
 name: 'Jane'
 };
 var tarzan = {
 [[Prototype]]: PersonProto,
 name: 'Tarzan'
 };
 */
function Person(name) {
  this.name = name;
}
// The object in Person.prototype becomes the prototype of all instances of Person.
Person.prototype.describe = function () {
  return 'Person named ' + this.name;
};
var jane = new Person('Jane');
console.log(jane.describe());  // Person named Jane

// The instanceof operator allows us to check whether an object is an instance of a given constructor
console.log(jane instanceof Person);  // true
console.log(jane instanceof Date);  // false

/*
 #The new Operator Implemented in JavaScript
 */
function newOperator(Constr, args) {
  var thisValue = Object.create(Constr.prototype);  // the prototype of an instance created by a constructor Constr in Constr.prototype.
  var result = Constr.apply(thisValue, args);
  if (typeof result === 'object' && result !== null) {  // if constructor has return value
    return result;  // returns an arbitrary object from a constructor and it becomes the result of the new operator.
  }
  return thisValue;
}

function Customer(name) {
  this.name = name;
  console.log(this.name);  // Tom
}

Customer.prototype = {
  say: function(){
    console.log('Hi from ' + this.name);  //
  }
};

// Usage of newOperator()
var tom = newOperator(Customer, ['Tom']);
console.log(tom);  // { name: 'Tom' }
tom.say();  // Hi from Tom

/*
 #Terminology: The Two Prototypes
 */
// Prototype 1: The prototype relationship
var proto = {};
var obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto);  // true

// Prototype 2: The value of the property prototype
// Each constructor C has a prototype property that refers to an object. That object becomes the prototype of all instances of C.
function C(){
}
console.log(Object.getPrototypeOf(new C()) === C.prototype);  // true

function Foo(){
}
console.log(Object.getPrototypeOf(Foo) === Function.prototype);  // true
