var booksJson = require('./books.json');

var result = booksJson.books.filter(function(b){
  return b.name === "wpf";
});

console.log(result);
