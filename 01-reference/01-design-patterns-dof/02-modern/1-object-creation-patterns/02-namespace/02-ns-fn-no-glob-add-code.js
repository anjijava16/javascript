//to avoid global object, we can add code immediately after namespace() returned
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

MyFramework.namespace("Utils").Dom = {
  say: function(){
    console.log('dom namespace scope is created');
  }
};

console.log(MyFramework.Utils.Dom);
console.log(MyFramework.Utils.NotExist);

MyFramework.Utils.Dom.say();
