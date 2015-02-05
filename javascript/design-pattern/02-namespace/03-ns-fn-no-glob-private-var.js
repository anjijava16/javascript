// to support private variables, we can assign an immediate anonymous function
// and keep variables and methods private by using the function closure.
var MyFramework = {
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

MyFramework.namespace("Utils").Dom = (function(){
  var privateSay = function(){   // private function
    console.log('privateSay');
  };

  return {
    say: privateSay      // public
  };
})();

console.log(MyFramework.Utils.Dom);
console.log(MyFramework.Utils.NotExist);

MyFramework.Utils.Dom.say();
