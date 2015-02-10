// TODO: it does not work the way that it should be

function retrieve(query, id){
  if(typeof id === "undefined"){
    var _cache;
    server(query, function(err, cache){
      console.log('cb is invoked', cache);
      _cache = cache;
    });
    console.log(_cache);
    //return function(id){      // partial function
    //  return _cache[id];
    //};
  }
  else{
    server(query, function(err, cache){
      console.log('full cb is invoked', cache[id]);
      //return cache[id];
    });   // return for 'full' function
  }

  function server(query, cb){
    // simulate long run
    setTimeout(function(){
      var items = {};
      items[0] = "Moe";
      items[1] = "Larry";
      items[2] = "Curly";
      cb(null, items);
    }, 500);
  }
}

console.log(retrieve("customers", 2));   // full

var partial = retrieve("customers");
//console.log(partial);
//console.log(partial(0));    // Moe
//console.log(partial(1));    // Larry
//console.log(partial(2));    // Curly
