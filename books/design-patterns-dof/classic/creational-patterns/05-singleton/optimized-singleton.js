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

Patterns.namespace("Classic").Singleton = (function () {
  var instance;
  function createInstance(){
    var object = new Object("I am the instance");
    return object;
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

(function run(){
  var singleton = Patterns.Classic.Singleton;
  var instance1 = singleton.getInstance();
  var instance2 = singleton.getInstance();

  console.log("instance1 and instance2 are same instance? " + (instance1 === instance2));
})();
