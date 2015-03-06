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

Patterns.namespace("Classic").Facade = (function () {
  var Bank = function(){
    this.verify = function(name, amount){
      // complex logic...
      return true;
    }
  };
  var Credit = function(){
    this.get = function(name){
      // complex logic...
      return true;
    }
  };
  var Background = function(){
    this.check = function(name){
      // complex logic...
      return true;
    }
  };
  var Mortgage = function(name){
    this.name = name;
  };
  Mortgage.prototype = {
    applyFor: function(amount){
      // access multiple subsystems...
      var result = "approved";
      if(!new Bank().verify(this.name, amount)){
        result = "denied";
      }
      else if(!new Credit().get(this.name)){
        result = "denied";
      }
      else if(!new Background().check(this.name)){
        result = "denied";
      }
      return this.name + " has been " + result + " for a " + amount + " mortgage";
    }
  };
  return {
    Mortgage: Mortgage
  };
})();

(function run(){
  var facade = Patterns.Classic.Facade;
  var mortgage = new facade.Mortgage("Tom");
  var result = mortgage.applyFor("$100,000");
  console.log(result);
})();
