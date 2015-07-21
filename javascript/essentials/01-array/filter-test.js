var numbers = [1, 2, 3, 4, 5];
var result = numbers.filter(
  function(item){
    var ret = item !== 3 && item !== 5;
    return ret;
  }
);
console.log(result);

var loopInFilter = numbers.filter(
    function(item){
      var arr = [3, 5];
      var ret = item != arr[0];  // need to assign the first filter item
      for(var i = 1; i < arr.length; i++){ // iterate through the rest of filter items
        ret = ret && item != arr[i];
      }
      console.log(ret);
      return ret;
    }
);
console.log(loopInFilter);
