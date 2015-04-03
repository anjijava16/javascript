/*
 #Protection against forgetting new: strict mode
 If you forget new when you use a constructor, you are calling it as a function instead of as a constructor.
 */
function SloppyColor(name){
  this.name = name;
}
var c = SloppyColor('green');
// No instance is created
console.log(c);  // undefined
// A global variable is created
console.log(name);  // green <- wrong

function StrictColor(name){
  'use strict';
  this.name = name;
}
try{
  var c = StrictColor('green');
}
catch(e){
  console.log(e);  // [TypeError: Cannot set property 'name' of undefined]
}
/*
 #Returning arbitrary objects from a constructor

 In many object-oriented languages, constructors can produce only direct instances.
 For example, consider Java: let’s say you want to implement a class Expression that has the subclasses Addition and Multiplication.
 Parsing produces direct instances of the latter two classes. You can’t implement it as a constructor of Expression,
 because that constructor can produce only direct instances of Expression. As a workaround, static factory methods are used in Java.
 class Expression {
   // Static factory method:
   public static Expression parse(String str) {
     if (...) {
       return new Addition(...);
     } else if (...) {
       return new Multiplication(...);
     } else {
       throw new ExpressionException(...);
     }
   }
 }
 ...
 Expression expr = Expression.parse(someStr);

 In JavaScript, you can simply return whatever object you need from a constructor.
 Thus, the JavaScript version of the preceding code would look like.
 function Expression(str) {
   if (...) {
     return new Addition(..);
   } else if (...) {
     return new Multiplication(...);
   } else {
     throw new ExpressionException(...);
   }
 }
 ...
 var expr = new Expression(someStr);

 That is good news: JavaScript constructors don't lock you in,
 so you can always change your mind as to whether a constructor should return a direct instance or something else.
 */
