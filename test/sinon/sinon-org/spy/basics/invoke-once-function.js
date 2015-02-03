var once = require('./src/once.js');

function displayMessage(){
  console.log("once-test: hello");
};

var disMsg = once(displayMessage);
disMsg();
