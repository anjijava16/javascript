/*
 Shadowing
 If a scope declares a variable that has the same name as one in a surrounding scope,
 access to the outer variable is blocked in the inner scope and all scopes nested inside it.
 Changes to the inner variable do not affect the outer variable, which is accessible again after the inner scope is left.
 */
var x = "global";
function f(){
  var x = "local";
  console.log(x);  // local
}
f();
console.log(x);  // global

/*
 Inside the function f(), the global x is shadowed by a local x.
 */
