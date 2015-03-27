/*
 The scope containing all of a program is called global scope or program scope.
 This is the scope you are in when entering a script. Inside the global scope, you can create a nested scope by defining a function.
 Inside such a function, you can again nest scopes. Each scope has access to its own variables and to the variables in the scopes that surround it.
 As the global scope surrounds all other scopes, its variables can be accessed everywhere
 */
// here we are in global scope
var globalVariable = 'xyz';
function f(){
  var localVariable = true;
  function n(){
    var nestLocalVariable = 123;

    // All variable of surround scopes are accessible
    localVariable = false;
    globalVariable = 'abc';
    console.log(nestLocalVariable);  // 123
    console.log(localVariable);  // false
    console.log(globalVariable);  // abc
  }
  n();
}
f();
// here we are again in global scope
