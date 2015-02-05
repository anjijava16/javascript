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

var dom = MyFramework.namespace("Utils.Dom");
console.log(MyFramework.Utils.Dom);
console.log(MyFramework.Utils.NotExist);

dom.say = function(){
  console.log('dom namespace scope is created');
};
dom.say();
