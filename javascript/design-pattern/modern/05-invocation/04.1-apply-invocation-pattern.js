// You can use the apply function to invoke a function and then set the "this" value yourself.
// Two arguments are needed: first the value for "this", and secondly any array of arguments used to invoke the function.

function giveName(first, last){
  this.first = first;
  this.last = last;
};

var person = {
  first: 'firstName'
};

console.log(person.first);

giveName.apply(person, ["Tom", "apply()"]);
//giveName.call(person, "Tom", "call()");  // the built-in function called "call" does the same (not array, a series of arguments.

console.log(person.first + " " + person.last);
