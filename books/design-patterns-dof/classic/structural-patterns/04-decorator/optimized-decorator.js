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

Patterns.namespace("Classic").Decorator = (function () {
  var extend = function(dest, source){
    for(var prop in source){
      if(source.hasOwnProperty(prop)){
        dest[prop] = source[prop];
      }
    }
  };
  var isArray = function(o){
    return (typeof o === "[object Array]");
  };
  var extendDeep = function(dest, source){
    for(var prop in source){
      if(source.hasOwnProperty(prop)){
        if(typeof prop === "object"){
          dest[prop] = isArray(prop) ? [] : {};
          this.extendDeep(dest[prop], source[prop]);
        }
        else{
          dest[prop] = source[prop];
        }
      }
    }
  };
  return {
    extend: extend,
    extendDeep: extendDeep
  };
})();

(function run(){
  var decorator = Patterns.Classic.Decorator;
  console.log("#decorator:", decorator);

  var User = function(name){
    this.name = name;
    this.say = function(){
      log.add("User: " + this.name);
    };
  };

  var user = new User("Kelly");
  user.say();

  decorator.extend(user, {
    street: "Broadway",
    city: "New York",
    say: function(){
      log.add("Extended User: " + this.name + ", " + this.street + ", " + this.city);
    }
  });
  user.say();

  decorator.extendDeep(user, {
    school: "Columbia",
    grades: {
      "Spring": 4.0,
      "Fall": 3.5
    },
    say: function(){
      log.add("Deeply Extended User: " + this.name + ", " + this.street + ", " + this.city +
      ", " + this.school + ", grades: " + this.grades.Spring + ", " + this.grades.Fall);
    }
  });
  user.say();

  log.show();
})();
