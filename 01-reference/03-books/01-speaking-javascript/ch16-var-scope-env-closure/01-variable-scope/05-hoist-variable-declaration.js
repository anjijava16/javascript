/*
 JavaScript hoists all variable declarations, it moves them to the beginning of their direct scopes.
 This makes it clear what happens if a variable is accessed before it has been declared
 */
function f(){
  console.log(bar);  // undefined
  var bar = 'abc';
  console.log(bar);  // abc
}

f();

/*
  JavaScript executes f() as code below
 function f() {
   var bar;
   console.log(bar);  // undefined
   bar = 'abc';
   console.log(bar);  // abc
 }
 */
