/*
 #Two objects that are similar
 var PersonProto = {
   describe: function () {
     return 'Person named '+this.name;
   }
 };
 var jane = {
   [[Prototype]]: PersonProto,
   name: 'Jane'
 };
 var tarzan = {
   [[Prototype]]: PersonProto,
   name: 'Tarzan'
 };
 */
function Person(name){
  this.name = name;
}
Person.prototype.describe = function(){
  return 'Person named ' + this.name;
};
var jane = new Person('Jane');
console.log(jane.describe());  // Person named Jane

// The instanceof operator allows us to check whether an object is an instance of a given constructor
console.log(jane instanceof Person);  // true
console.log(jane instanceof Date);  // false
