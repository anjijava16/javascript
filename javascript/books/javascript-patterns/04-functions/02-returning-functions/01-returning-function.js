
var setup = function(){
  console.log(1);
  return function(){
    console.log(2);
  }
};

// using the setup function
var my = setup(); // 1
my();     // 2
