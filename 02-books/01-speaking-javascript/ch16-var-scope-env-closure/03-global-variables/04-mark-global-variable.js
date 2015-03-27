/*
 it is better to refer to foo as a variable, not as a property of window.
 If you want to make it obvious that foo is a global or global-like variable, you can add a name prefix such as g_.
 */
var g_foo = 123;
(function(){
  console.log(g_foo);  // 123
}());
