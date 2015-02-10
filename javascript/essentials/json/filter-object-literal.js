var library = {
  "books": [
    {"name": "wpf"},
    {"name": "java"},
    {"name": "javascript"}
  ]
}

var result = library.books.filter(function(b){
  return b.name === "wpf";
});

console.log(result);
