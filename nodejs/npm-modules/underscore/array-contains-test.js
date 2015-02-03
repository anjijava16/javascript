var _ = require('underscore');

var people = [{name: 'Tom', age: 10}, {name: 'Dick', age: 20}, {name: 'Harry', age: 30}]

console.log('#findWhere person name=Tomx')
var p = people.filter(function(element){
  return element.name === 'Tom';
});
console.log(p);
var person = _.findWhere(people, {name: 'Tomx'});
console.log(!!person);

console.log('#people');
console.log(people);

var colors = ['red', 'yellow', 'blue'];

console.log('#colors')
console.log(colors);
console.log('#findWhere colors')
console.log(_.contains(colors, 'yellow'));
