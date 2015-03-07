var numbers = [1, 2, 3, 4, 5];
var result = numbers.filter(
  function(item){
    var ret = item !== 3 && item !== 5;
    return ret;
  }
);
console.log(result);
