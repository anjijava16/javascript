'use strict';
var obj = function(){
  var privateData;
  return function(value){  // define obj
    if(value !== privateData){
      console.log('Changed: ' + value);
      privateData = value;
    }
  }
}();
obj('JavaScript');  // Changed: JavaScript
console.log(obj.privateData);  // undefined
