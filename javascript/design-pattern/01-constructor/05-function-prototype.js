//The prototype method say() is shared by both instances has full access each object's properties
// through this keyword which is bound to the current object.
function Person(name){
  this.name = name;
}
Person.prototype.say = function(){
  console.log(this.name);
};

var tom = new Person('Tom');
var dick = new Person('Dick');

tom.say();
dick.say();
