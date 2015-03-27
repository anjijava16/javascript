/*
 f returns an array with three functions in it. All of these functions can still access the environment of f and thus i.
 In fact, they share the same environment. Alas, after the loop is finished, i has the value 3 in that environment.
 Therefore, all functions return 3.
 */
function f(){
  var result = [];
  for(var i = 0; i < 3; i++){
    var func = function(){
      return i;
    };
    result.push(func);
  }
  return result;
}
console.log(f()[1]());  // 3
