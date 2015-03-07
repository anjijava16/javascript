// Object.prototype.toString.call(person['scores']);  // [object Array]
// person['books'].constructor.name;       // Array
var person = {
  name: "Name",
  scores: [1, 2, 3],
  books: [
    {name: "wpf"},
    {name: "javascript"}
  ]
};

console.log(Object.prototype.toString.call(person['scores']));  // [object Array]
console.log(person['books'].constructor.name);     // Array
