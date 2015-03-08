function makePartial(fn){
  //console.log(this);
  //console.log(fn);
  //console.log(arguments);
  //console.log([].slice.call(arguments, 1));
  //console.log([].concat.apply([fn, this], [].slice.call(arguments, 1)));
  return partial.apply(this,
    [].concat.apply([fn, this],
      [].slice.call(arguments, 1)));           // 1st batch of arguments

  function partial (fn, scope){
    //console.log("---");
    //console.log(fn);
    //console.log(scope);
    //console.log(arguments);
    var args = [].slice.call(arguments, 2);    // 2nd batch of arguments
    //console.log(args);
    //console.log("===");
    return function(){
      //console.log(scope);
      //console.log(args);
      //console.log(arguments);
      //console.log([].concat.apply(args, arguments));
      return fn.apply(scope,
        [].concat.apply(args, arguments));     // all arguments
    };
  }
}

function add(v, w, x, y, z){
  return v + w + x + y + z;
}

var add3 = makePartial(add, 2, 2, 10);

var total = add3(10, 6);
console.log(total);
