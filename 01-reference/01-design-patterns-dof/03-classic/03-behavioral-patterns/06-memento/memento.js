// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      console.log(log);
      log = "";
    }
  }
})();

var Person = function(name, street, city, state){
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
};

Person.prototype = {
  hydrate: function(){
    var memnto = JSON.stringify(this);
    return memnto;
  },
  dehydrate: function(memento){
    var m = JSON.parse(memento);
    for(var prop in m) this[prop] = m[prop];
  }
};

var CareTaker = function(){
  this.mementos = {};
  this.add = function(key, memento){
    this.mementos[key] = memento;
  }
  this.get = function(key){
    return this.mementos[key];
  }
};

(function run(){
  var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
  var john = new Person("John Wang", "48th Street", "San Jose", "CA");

  var caretaker = new CareTaker();

  // save state
  caretaker.add(1, mike.hydrate());
  caretaker.add(2, john.hydrate());

  // mess up their names
  mike.name = "King Kong";
  john.name = "Superman";

  // restore original state
  mike.dehydrate(caretaker.get(1));
  john.dehydrate(caretaker.get(2));

  log.add(mike.name);
  log.add(john.name);

  log.show();
})();
