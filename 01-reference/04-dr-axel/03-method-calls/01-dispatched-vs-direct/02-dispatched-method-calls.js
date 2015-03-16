var arr = ['a', 'b'];
console.log(arr.toString());   // dispatched method calls

/*
 arr.toString() actually performs two steps

 1, Dispatch: In the prototype chain of arr, retrieve the value of the first property whose name is toString.
 2, Call: Call the value and set the implicit parameter this to the receiver arr of the method invocation.
 */
var func = arr.toString;      // dispatch
console.log(func.call(arr));  // direct call, providing a value for 'this'
