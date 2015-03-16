/*
 There are two ways to make direct method calls in JavaScript:

 1, Function.prototype.call(thisValue, arg0?, arg1?, ...)
 2, Function.prototype.apply(thisValue, argArray)

 One problem of invoking a method via dynamic dispatch is that the method needs to be in the prototype chain of an object.
 call() enables you to call a method directly while specifying the receiver.
 That means that you can borrow a method from an object that is not in the current prototype chain.
 For example, you can borrow Object.prototype.toString and thus apply the original, un-overridden implementation of toString to arr.
 */
var arr = ['a', 'b'];
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.apply(arr));
