var people = [{name: 'Tom', age: 10}, {name: 'Dick', age: 20}, {name: 'Harry', age: 30}]

console.log('#no index');
people.forEach(function(element){
  console.log(element.name);
});

console.log('#has index');
people.forEach(function(element, index){
  console.log(index + ', ' + element.name);
});
