function Person(name){
  this.name = name;
}
Person.prototype.say = function(msg){
  console.log(msg + ' from ' + this.name);
};

new Person('Tom').say('Hi');
