function once(fn){
  var returnValue, called = false;
  return function(){
    if(!called){
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
};

function displayMessage(){
  console.log("hello");
};

var displayMsg = once(displayMessage);

displayMsg();
