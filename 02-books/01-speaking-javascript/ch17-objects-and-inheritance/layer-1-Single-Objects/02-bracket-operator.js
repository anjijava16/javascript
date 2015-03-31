/*
 #Getting properties via the bracket operator
 The bracket operator lets you compute the key of a property, via an expression.
 */
var obj = {someProperty: 'abc'};
console.log(obj['some' + 'Property']);  // abc
var propKey = 'someProperty';
console.log(obj[propKey]);  // abc

// That also allows you to access properties whose keys are not identifiers
var obj = {'not an identifier': 123};
console.log(obj['not an identifier']);  // 123

// Note that the bracket operator coerces its interior to string
var obj = {'6': 'bar'};
console.log(obj[3+3]);  // key: the string '6' - 'bar'

/*
  #Calling methods via the bracket operator
 */
var obj = {myMethod: function(){
  return true;
}};
console.log(obj['myMethod']());  // true

/*
  #Setting properties via the bracket operator
 */
var obj = {};
obj['anotherProperty'] = 'def';
console.log(obj.anotherProperty);  // def

/*
  Deleting properties via the bracket operator
 */
var obj = {'not an identifier': 1, prop: 2};
console.log(Object.keys(obj));  // [ 'not an identifier', 'prop' ]
console.log(delete obj['not an identifier']);  // true
console.log(Object.keys(obj));  // [ 'prop' ]

