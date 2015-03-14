// single linked list that using literal object

var head = {
  content: "node_a",
  next: {
    content: "node_b",
    next: {
      content: "node_c"
    }
  }
};

function printNodes(node){
  while(node){
    console.log(node.content);
    node = node.next;
  }
}

printNodes(head);
