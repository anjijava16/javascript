function checkIsEven(number){
  var result = isEven(number) ? true : false;
  console.log(result);
  function isEven(n){
    return n % 2 === 0;
  }
}

checkIsEven(4);
checkIsEven(5);
