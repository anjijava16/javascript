// Good: simpler and straightforward; hide() doesn't need to loop through nodes again; won't break old code because callback is optional

function Node(id, display) {
  this.id = id;
  this.display = display;
}

// refactored findNodes() to accept a callback
var findNodes = function (callback) {
  //var i = 100000;
  var i = 10;   // big, heavy loop
  var nodes = [];   // stores the result
  while (i) {
    var found = new Node(i, "visible");
    if(callback){
      callback(null, found);
    }
    i -= 1;
    // complex logic here...
    nodes.push(found);
  }
  return nodes;
};

var hide = function (err, node) {
  node.display = "none";
};

var nodes = findNodes(hide);

nodes.forEach(function (node) {
  console.log(node);
});
