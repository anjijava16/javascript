// single linked list that using constructor function
// you should compare this one with 01.2-single-linked-list-literal-obj.js

function Node(content){
  this.content = content;
};

var node_a = new Node('a');
console.log(node_a.content);

var node_b = new Node('b');
console.log(node_b.content);

node_a.next = node_b;

console.log("===");
console.log("Print linked list");
function printNodes(node){
  while(node){
    console.log(node.content);
    node = node.next;
  }
}

printNodes(node_a);
console.log("===");
