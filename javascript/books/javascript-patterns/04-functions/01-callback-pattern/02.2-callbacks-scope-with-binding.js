// Good: will work when using binding call() to invoke callback with object this callback belongs to.

function Node(id, display, color) {
  this.id = id;
  this.display = display;
  this.color = color;
}

// refactored findNodes() to accept a callback
var findNodes = function (callback, callback_obj) {
  //var i = 100000;
  var i = 10;   // big, heavy loop
  var nodes = [];   // stores the result
  while (i) {
    var found = new Node(i, "visible", "white");
    if(typeof callback === "function"){
      callback.call(callback_obj, found);
    }
    i -= 1;
    // complex logic here...
    nodes.push(found);
  }
  return nodes;
};

var myapp = {};
myapp.color = "green";
myapp.paint = function(node){
  node.color = this.color;   // won't work without binding
};
myapp.displayColor = function(){
  console.log(this.color);
};
myapp.displayColor();

var nodes = findNodes(myapp.paint, myapp);  // passing callback and object this callback belongs to

nodes.forEach(function (node) {
  console.log(node);
});
