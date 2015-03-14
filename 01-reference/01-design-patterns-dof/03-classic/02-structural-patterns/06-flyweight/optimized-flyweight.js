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

Patterns.namespace("Classic").Flyweight = (function () {
  // prototype flyweights
  var Proto = function(id, make, model, processor){
    this.id = id;
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
  var protoDell = new Proto(1, "Dell", "Studio XPS", "Intel");
  var protoHp = new Proto(2, "HP", "Envy", "Intel");

  var Computer = function(memory, tag){
    this.memory = memory;
    this.tag = tag;
  };

  function create(make, model, processor, memory, tag){
    if(make === "Dell" && model === "Studio XPS"){
      Computer.prototype = protoDell;
    }
    else if(make === "HP" && model === "Envy"){
      Computer.prototype = protoHp;
    }

    return new Computer(memory, tag);
  }

  var ComputerCollection = function(){
    var computers = {};
    var count = 0;
    return {
      add: function(computer){
        computers[computer.tag] = computer;
        count++;
      },
      get: function(tag){
        return computers[tag];
      },
      getCount: function(){
        return count;
      },
      getPrototypeCount: function(){
        var types = {};
        for(var tag in computers) types[computers[tag].id] = true;

        var count = 0;
        for(var t in types) count++;
        return count;
      }
    };
  }
  return{
    create: create,
    ComputerCollection: ComputerCollection
  };
})();

(function run(){
  var flyweight = Patterns.Classic.Flyweight;
  var computers = new flyweight.ComputerCollection();

  var dell1 = flyweight.create("Dell", "Studio XPS", "Intel", "5G", "Y755P");
  computers.add(dell1);
  computers.add(flyweight.create("Dell", "Studio XPS", "Intel", "6G", "X997T"));
  computers.add(flyweight.create("Dell", "Studio XPS", "Intel", "2G", "U8U80"));
  computers.add(flyweight.create("Dell", "Studio XPS", "Intel", "2G", "NT777"));
  computers.add(flyweight.create("Dell", "Studio XPS", "Intel", "2G", "0J88A"));
  var hp1 = flyweight.create("HP", "Envy", "Intel", "4G", "CNU883701");
  computers.add(hp1);
  computers.add(flyweight.create("HP", "Envy", "Intel", "2G", "TXU003283"));

  log.add("Computers: " + computers.getCount());
  log.add("Prototypes: " + computers.getPrototypeCount());

  log.show();
})();
