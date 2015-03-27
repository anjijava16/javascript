// index
function logArgs(){
  for (var i = 0; i < arguments.length; i++){
    console.log(i + '. ' + arguments[i]);
  }
}

logArgs('hello', 'world');
/*
 0. hello
 1. world
 */

// in operator
function f(){
  return 1 in arguments;
}
console.log(f('a'));  // false
console.log(f('a', 'b'));  // true

// hasOwnProperty is similar as "in operator"
function g(){
  return arguments.hasOwnProperty(1);
}
console.log(g('a', 'b'));
