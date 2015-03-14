// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) { log += msg + "\n"; },
    show: function () { console.log(log); log = ""; }
  }
})();

function Flyweight(make, model, processor){
  this.make = make;
  this.model = model;
  this.processor = processor;
};

// real subject
function GeoCoder(){
  this.getLatLng = function(address){
    if (address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  };
}

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

Patterns.namespace("Classic").Proxy = (function () {
  var Geo = function(){
    var geocoder = new GeoCoder();
    var geocache = {};
    return {
      getLatLng: function(address){
        if(!geocache[address]){
          geocache[address] = geocoder.getLatLng(address);
        }
        log.add(address + ": " + geocache[address]);
        return geocache[address];
      },
      getCount: function(){
        var count = 0;
        for(var code in geocache) {count ++;}
        return count;
      }
    };
  };
  return {
    Geo: Geo
  }
})();

(function run(){
  var proxy = Patterns.Classic.Proxy;

  var geo = new proxy.Geo();

  // geolocation requests
  geo.getLatLng("Paris");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("London");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("Amsterdam");
  geo.getLatLng("London");
  geo.getLatLng("London");

  log.add("\nCache size: " + geo.getCount());
  log.show();
})();
