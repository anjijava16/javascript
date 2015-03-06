// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

var Patterns = {
  namespace: function (name) {
    var parts = name.split(".");
    var ns = this;

    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }

    return ns;
  }
};

Patterns.namespace("Classic").Composite = (function () {
  var Node = function (name) {
    this.children = [];
    this.name = name;
  };

  Node.prototype = {
    add: function (child) {
      this.children.push(child);
    },
    remove: function (child) {
      var length = this.children.length;
      for (var i = 0; i < length; i++) {
        if (this.children[i] === child) {
          this.children.splice(i, 1);
          return;
        }
      }
    },
    getChild: function (i) {
      return this.children[i];
    },
    hasChildren: function () {
      return this.children.length > 0;
    }
  };

  // recursively traverse a (sub)tree
  var traverse = function (indent, node) {

    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
      this.traverse(indent, node.getChild(i));
    }
  };

  return {
    Node: Node,
    traverse: traverse
  };
})();

(function run() {

  var composite = Patterns.Classic.Composite;

  var tree = new composite.Node("root");
  var left = new composite.Node("left")
  var right = new composite.Node("right");
  var leftleft = new composite.Node("leftleft");
  var leftright = new composite.Node("leftright");
  var rightleft = new composite.Node("rightleft");
  var rightright = new composite.Node("rightright");

  tree.add(left);
  tree.add(right);
  tree.remove(right);  // note: remove
  tree.add(right);
  left.add(leftleft);
  left.add(leftright);
  right.add(rightleft);
  right.add(rightright);

  composite.traverse(1, tree);

  log.show();
})();
