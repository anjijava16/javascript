/*
  #Manually simulating an apply() for constructors
 */

console.log('new Date(2011, 11, 24):', new Date(2011, 11, 24));
console.log('Date:', Date);
// Step1 - Pass the arguments to Date via a method call (they are not in array - yet)
console.log(new (Date.bind(null, 2011, 11, 24)));  // Sat Dec 24 2011 00:00:00 GMT-0800 (PST)
var nullAryFunc = Function.prototype.bind.apply(Date, [null].concat([2011, 11, 24]));
console.log('nullAryFunc:', nullAryFunc);
console.log('new nullAryFunc():', new nullAryFunc());

// Step2 - Use apply() to hand an array to bind(). Because bind() is a method call, we can use apply()
console.log(new (Function.prototype.bind.apply(Date, [null, 2011, 11, 24])));  // Sat Dec 24 2011 00:00:00 GMT-0800 (PST)
// Use concat() to create it by prepending null to arr:
var arr = [2011, 11, 24];
console.log(new (Function.prototype.bind.apply(Date, [null].concat(arr))));  // Sat Dec 24 2011 00:00:00 GMT-0800 (PST)

/*
  Library method
 */
if(!Function.prototype.construct){
  Function.prototype.construct = function(argArray){
    if(!Array.isArray(argArray)){
      throw new TypeError("Argument must be an array");
    }
    var constr = this;
    var nullaryFunc = Function.prototype.bind.apply(constr, [null].concat(argArray));
    return new nullaryFunc();
  }
}

console.log(Date.construct([2011, 11, 24]));  // Sat Dec 24 2011 00:00:00 GMT-0800 (PST)
