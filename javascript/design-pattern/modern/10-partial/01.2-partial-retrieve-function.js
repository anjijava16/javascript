// Partial functions and currying are useful when you find yourself calling the same function over and over with the same arguments.
// It is also useful if the first half of the function requires heavy duty processing of which the results can be saved for all subsequent calls

function retrieve(query, id){
  if(typeof id === "undefined"){
    var cache = server(query);
    return function(id){      // partial function
      return cache[id];
    };
  }
  return server(query)[id];   // return for 'full' function

  function server(query){
    var items = {};
    items[0] = "Moe";
    items[1] = "Larry";
    items[2] = "Curly";
    return items;
  }
}

console.log(retrieve("customers", 2));   // full

var partial = retrieve("customers");
console.log(partial(0));    // Moe
console.log(partial(1));    // Larry
console.log(partial(2));    // Curly
