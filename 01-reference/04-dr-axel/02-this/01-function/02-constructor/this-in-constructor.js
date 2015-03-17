/*
 Functions become constructors if you invoke them via the new operator.
 That operator creates a new object and passes it to the constructor via this:
 */
var savedThis;
function Constr() {
  savedThis = this;
}
var inst = new Constr();
console.log(savedThis === inst);  // true
