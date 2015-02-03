
function test(x, y){
  //console.log(typeof(x));
  //console.log(typeof(y));
  //console.log('undefined' !== typeof(x));
  //console.log('undefined' !== typeof(x) && 'undefined' !== typeof(y));
  if('undefined' !== typeof(x) && 'undefined' !== typeof(y)){
    console.log('both defined');
  }
  else if(x){
    console.log('x defined');
  }
  else if(y){
    console.log('y defined');
  }
  else{
    console.log('both undefined');
  }
}

test(undefined, undefined);
test(1, undefined);
test(undefined, 2);
test(1, 2);
