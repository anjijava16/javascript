// parent constructor
function CarMaker(){}

// a method of the parent
CarMaker.prototype.drive = function(){
  return "Vroom, I have " + this.doors + " doors";
};

// the static factory method
CarMaker.factory = function(type){
  var constr = type, newcar;
  if(typeof CarMaker[constr] !== "function"){
    throw{
      name: "Error",
      message: constr + " doesn't exist"
    };
  }
  if(typeof CarMaker[constr].prototype.drive !== "function"){
    CarMaker[constr].prototype = new CarMaker();
  }
  // create a new instance
  newcar = new CarMaker[constr]();
  // optionally call some methods and then return...
  return newcar;
};

// define specific car makers
CarMaker.Compact = function(){
  this.doors = 4;
};
CarMaker.Convertible = function(){
  this.doors = 2;
};
CarMaker.SUV = function(){
  this.doors = 5;
};

var corolla = CarMaker.factory('Compact');
console.log(corolla.drive());

var m3 = CarMaker.factory('Convertible');
console.log(m3.drive());

var x5 = CarMaker.factory('SUV');
console.log(x5.drive());
