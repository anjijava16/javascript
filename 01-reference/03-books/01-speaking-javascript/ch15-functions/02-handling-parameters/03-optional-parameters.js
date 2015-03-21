function bar(arg1, arg2, optional){
  if(optional === undefined){
    optional = 'default value';
  }
  //if (!optional) {
  //  optional = 'default value';
  //}
  //// Or operator: use left operand if it isn't falsy
  //optional = optional || 'default value';
  //if (arguments.length < 3) {
  //  optional = 'default value';
  //}
  return optional;
}
console.log(bar(1, 2));  // default value
