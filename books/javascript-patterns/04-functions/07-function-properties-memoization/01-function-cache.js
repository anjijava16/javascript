function func(a, b, c) {};
console.log(func.length);  // 3

var myFunc = function(param){
  if(!myFunc.cache[param]){
    var result = {id: param, name: "pass"};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};

// cache storage
myFunc.cache = {};

myFunc(1);
myFunc(2);
myFunc(1);

console.log(myFunc.cache);
