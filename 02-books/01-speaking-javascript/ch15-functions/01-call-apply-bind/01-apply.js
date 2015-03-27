/*
 func.apply(thisValue, argArray)
 This method uses the elements of argArray as arguments while calling the function func;
 that is, the following two expressions are equivalent.
 func(arg1, arg2, arg3)
 func.apply(null, [arg1, arg2, arg3])
 */
console.log(Math.max(17, 33, 2));  // 33
console.log(Math.max.apply(null, [17, 33, 2]));  // 33
