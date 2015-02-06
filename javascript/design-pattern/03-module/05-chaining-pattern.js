// The Namespace pattern is frequently used in with Module pattern.
// Each file a namespace is defined and then followed by a module that is added to this namespace.

var MyApplication = {
  namespace: function(name){
    var parts = name.split(".");
    var ns = this;
    var len = parts.length;

    for(var i = 0; i < len; i++){
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }

    return ns;
  }
};

MyApplication.namespace("Utils").module = (function(){
  // private area
  var count = 0;
  var increment = function() {count++;};
  var decrement = function() {count--;};
  var privateSay = function(){   // private function
    console.log('hello!');
  };
  return {
    // public area
    add: function(){increment();},
    say: privateSay,           // public

    increment: increment,      // public - revealing method
    decrement: decrement       // public - revealing method
  };
})();

MyApplication.Utils.module.say();
