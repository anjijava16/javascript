// Bad: because hide has to loop again through the array of nodes returned by findNodes().

function Node(id, display) {
  this.id = id;
  this.display = display;
}

var findNodes = function () {
  //var i = 100000;
  var i = 10;   // big, heavy loop
  var nodes = [];   // stores the result
  while (i) {
    var found = new Node(i, "visible");
    i -= 1;
    // complex logic here...
    nodes.push(found);
  }
  return nodes;
};

var hide = function (nodes) {
  var len = nodes.length;
  for (var i = 0; i < len; i++) {
    nodes[i].display = "none";
  }
};

var nodes = findNodes();

nodes.forEach(function (node) {
  console.log(node);
});

hide(nodes);

nodes.forEach(function (node) {
  console.log(node);
});
