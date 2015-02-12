// constructor property function is static method

// constructor
var Gadget = function(){};

// a static method
Gadget.isShiny = function(){
  return "you bet";
};

Gadget.prototype.setPrice = function(price){
  this.price = price;
};

// calling a static method
console.log(Gadget.isShiny());  // "you bet"

// creating an instance and calling a method
var iphone = new Gadget();
iphone.setPrice(500);

