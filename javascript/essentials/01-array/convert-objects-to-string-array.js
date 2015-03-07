var people = [{name: 'Tom', age: 10}, {name: 'Dick', age: 20}, {name: 'Harry', age: 30}]

var names = people.map(function(person){
  return person.name;
});

console.log(names);
