var async = require('async');
var deasync = require('deasync');

function add(x, y, cb){
  // simulate long run
  setTimeout(function(){
    var result = x + y;
    cb(null, result);  // follow cb(err, result) pattern
  }, 2000);
}

function addSync(x, y){
  var ret;
  add(x, y, function(err, result){
    ret = result;
  });
  while(ret === undefined) {
    deasync.sleep(100);
  }
  console.log('completed');
  // returns result with sleep; undefined without
  return ret;
}

var result = addSync(3, 4);
console.log(result);
console.log('end');