// Bad: won't work because this.color will not be defined.

function Node(id, display, color) {
  this.id = id;
  this.display = display;
  this.color = color;
}

// refactored findNodes() to accept a callback
var findNodes = function (callback) {
  //var i = 100000;
  var i = 10;   // big, heavy loop
  var nodes = [];   // stores the result
  while (i) {
    var found = new Node(i, "visible", "white");
    if(typeof callback === "function"){
      callback(found);
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

var nodes = findNodes(myapp.paint);

nodes.forEach(function (node) {
  console.log(node);
});
