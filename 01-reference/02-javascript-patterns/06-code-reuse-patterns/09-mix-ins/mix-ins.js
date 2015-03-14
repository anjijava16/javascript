function mixin(){
  var newObj = {};
  var len = arguments.length;
  for(var i = 0; i < len; i++){
    for(var p in arguments[i]){
      if(arguments[i].hasOwnProperty(p)){
        newObj[p] = arguments[i][p];
      }
    }
  }
  return newObj;
}

var cake = mixin(
  {eggs: 2, large: true},
  {butter: 1, salted: true},
  {flour: "3 cups"},
  {sugar: "sure!"}
);

console.log(cake);

//#output
//{ eggs: 2,
//  large: true,
//  butter: 1,
//  salted: true,
//  flour: '3 cups',
//  sugar: 'sure!' }
