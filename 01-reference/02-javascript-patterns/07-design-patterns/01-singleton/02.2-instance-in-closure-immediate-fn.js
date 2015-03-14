var Universe;

(function(){
  var instance;
  Universe = function Universe(){
    if(instance){
      return instance;
    }
    instance = this;
    // all the functionality
    this.start_time = 0;
    this.bang = "Big";
  };
})();

// adding to the prototype
Universe.prototype.nothing = true;

var uni = new Universe();

// again adding to the prototype
// after the initial object is created
Universe.prototype.everything = true;

var uni2 = new Universe();

// TESTING
console.log(uni.nothing);  // true
console.log(uni2.nothing);  // true
console.log(uni.everything);  // true
console.log(uni2.everything);  // true

// it's the same single instance
console.log(uni === uni2);  // true
console.log(uni.bang);   // "Big"
console.log(uni.constructor === Universe);  // true
