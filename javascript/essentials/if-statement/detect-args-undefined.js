function test1(x, y){
  //console.log(typeof(x));
  //console.log(typeof(y));
  //console.log('undefined' !== typeof(x));
  //console.log('undefined' !== typeof(x) && 'undefined' !== typeof(y));
  if(x && y){
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

console.log("#test-1");
test1(undefined, undefined);
test1(1, undefined);
test1(undefined, 2);
test1(1, 2);

function test2(x, y){
  console.log("!x=" + !x + " !y=" + !y);
  if(x && y){
    console.log('#both defined');
  }
  else if(x){
    console.log('#x defined');
  }
  else if(y){
    console.log('#y defined');
  }
  else{
    console.log('#both undefined');
  }
}

console.log("#test-2");
test2(undefined, undefined);
test2(1, undefined);
test2(undefined, 2);
test2(1, 2);
