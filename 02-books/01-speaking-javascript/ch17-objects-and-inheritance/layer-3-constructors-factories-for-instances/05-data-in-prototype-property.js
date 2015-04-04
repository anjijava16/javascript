/*
 #Avoid Prototype Properties with Initial Values for Instance Properties
 Prototypes contain properties that are shared by several objects. Hence, they work well for methods.
 You can also use them to provide initial values for instance properties. I’ll later explain why that is not recommended.
 A constructor usually sets instance properties to initial values.
 If one such value is a default, then you don’t need to create an instance property.
 You only need a prototype property with the same key whose value is the default.
 */

/**
 * Anti-pattern: DO NOT do this
 *
 * @param data an array with names
 The parameter data is optional. If it is missing, the instance does not get a property data, but inherits Names.prototype.data instead.
 */
function Names(data){
  if(data){
    // There is a parameter
    // => create instance property
    this.data = data;
  }
}
Names.prototype.data = [];

var n1 = new Names();
var n2 = new Names();
n1.data.push('jane');  // change default value
console.log(n1.data);  // [ 'jane' ]
console.log(n2.data);  // [ 'jane' ]

/*
 #Best practice: don't share default values
 */
function BestNames(data){
  this.data = data || [];
}

var bn1 = new BestNames();
var bn2 = new BestNames();
bn1.data.push('jane');  // change one instance value
console.log(bn1.data);  // [ 'jane' ]
console.log(bn2.data);  // []

/*
 #Creating instance properties on demand
 */
function DNames(data){
  if(data){
    this.data = data;
  }
}
DNames.prototype = {
  constructor: DNames,  // ensure the property constructor is setup properly.
  get data(){
    // Define, don't assign
    // => avoid calling the (nonexistent) setter
    Object.defineProperty(this, 'data', {
      value: [],
      enumerable: true,
      configurable: false,
      writable: false
    });
    return this.data;
  }
};

var dn1 = new DNames();
var dn2 = new DNames();
dn1.data.push('jane');
console.log(dn1.data);  // [ 'jane' ]
console.log(dn2.data);  // []

/*
 #Avoid Nonpolymorphic Prototype Properties
 If the same property (same key, same semantics, generally different values), exists in several prototypes, it is called polymorphic.
 Then the result of reading the property via an instance is dynamically determined via that instance’s prototype.
 Prototype properties that are not used polymorphically can be replaced by variables
 */

// The code should be inside an IIFE or a module
function Foo(){
}
var FACTOR = 42;
Foo.prototype.compute = function(x){
  return x * FACTOR;
};
var foo = new Foo();
console.log(foo.compute(2));  // 84

/*
 #Polymorphic Prototype Properties
 Here is an example of polymorphic prototype properties with immutable data.
 Tagging instances of a constructor via prototype properties enables you to tell them apart from instances of a different constructor
 */
function ConstrA(){}
ConstrA.prototype.Type_NAME = 'ConstrA';

function ConstrB(){}
ConstrB.prototype.Type_NAME = 'ConstrB';

var ca = new ConstrA();
console.log(ca.Type_NAME);  // ConstrA
var cb = new ConstrB();
console.log(cb.Type_NAME);  // ConstrB
