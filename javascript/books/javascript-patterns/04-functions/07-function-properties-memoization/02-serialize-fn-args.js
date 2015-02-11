var myFunc = function(param){
  console.log(arguments);
  var cachekey = JSON.stringify(Array.prototype.slice.call(arguments));
  console.log(cachekey);
  if(!myFunc.cache[cachekey]){
    var result = {id: cachekey, name: "pass"};
    // ... expensive operation ...
    myFunc.cache[cachekey] = result;
  }
  return myFunc.cache[cachekey];
};

// cache storage
myFunc.cache = {};

myFunc(8, 9);
myFunc(1, 2, 3);
myFunc(8, 9);

console.log(myFunc.cache);
