var dispatchedIssue = (function(){
  console.log('#dispatchedIssue');

  /*
   Calling hasOwnProperty via dispatch does not work properly if Object.prototype.hasOwnProperty is overridden.
   */
  var obj1 = {hasOwnProperty: 123};
  obj1.hasOwnProperty('toString');
  // TypeError: Property 'hasOwnProperty' is not a function

  /*
   hasOwnProperty may also be unavailable via dispatch if Object.prototype is not in the prototype chain of an object.
   */
  var obj2 = Object.create(null);
  obj2.hasOwnProperty('toString');
  // TypeError: Object has no method 'hasOwnProperty'
})();
