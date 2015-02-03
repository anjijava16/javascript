var async = require('async');

function add(x, y, cb){
  // simulate long run
  setTimeout(function(){
    var result = x + y;
    cb(null, result);  // follow cb(err, result) pattern
  }, 500);
}

add(2, 3, function(err, result){
  console.log(result);
});

function addSync(x, y){
  var calls = [];
  calls.push(function(cb){
    add(3, 4, cb);
  });
  async.parallel(calls, function(err, result){
    console.log('async.parallel ' + result);
    //return result;
  });
  console.log('end');
}

addSync(3, 4);


//console.log(addSync(3, 4));

//console.log('sync add ' + addSync(3, 4));
