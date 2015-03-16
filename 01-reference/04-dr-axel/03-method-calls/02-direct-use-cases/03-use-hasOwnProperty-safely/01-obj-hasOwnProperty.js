/*
 obj.hasOwnProperty('prop') tells you whether obj has the own (non-inherited) property prop.
 */
var dispatched = (function(){
  console.log('#dispatched');
  var obj = {prop: 123};
  console.log(obj.hasOwnProperty('prop'));      // true
  console.log('toString' in obj);               // inherited - true
  console.log(obj.hasOwnProperty('toString'));  // own - false
})();
