/*
 __proto__ = [[Prototype]]
 */
/*
 #Without prototype
 var jane = {
   name: 'Jane',
   describe: function () {
     return 'Person named '+this.name;
   }
 };
 var tarzan = {
   name: 'Tarzan',
   describe: function () {
     return 'Person named '+this.name;
   }
 };

 */
var PersonProto = {
  describe: function(){
    return 'Person named ' + this.name;
  }
};

var jane = {
  name: 'Jane',
  __proto__: PersonProto
};

var tarzan = {
  name: 'Tarzan',
  __proto__: PersonProto
};

console.log(jane.describe());
console.log(tarzan.describe());

