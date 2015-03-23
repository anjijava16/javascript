/*
 If a function leaves the scope in which it was created, it stays connected to the variables of that scope (and of the surrounding scopes)
 */
function createInc(startValue){
  return function(step){
    startValue += step;
    return startValue;
  };
}
/*
 The function returned by createInc() does not lose its connection to startValue—
 the variable provides the function with state that persists across function calls
 */
var inc = createInc(5);
inc(1);  // 6
inc(2);  // 8
