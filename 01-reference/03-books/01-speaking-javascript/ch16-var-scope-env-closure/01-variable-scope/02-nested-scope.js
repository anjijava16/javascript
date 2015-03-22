/*
  If scopes are nested within the direct scope of a variable, then the variable is accessible in all of those scopes.
  The direct scope of arg is foo(), but it is also accessible in the nested scope bar().
 */
function foo(arg){   // outer scope
  function bar(){  // inner scope
    console.log('arg: ' + arg);
  }
  bar();
}
foo('hello');  // arg: hello
