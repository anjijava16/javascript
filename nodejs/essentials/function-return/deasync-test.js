var deasync = require('deasync');

function SyncFunction(){
  var ret;
  setTimeout(function(){
    ret = "hello";
  },2000);
  while(ret === undefined) {
    deasync.sleep(100);
  }
  console.log('completed');
  // returns hello with sleep; undefined without
  return ret;
}

console.log(SyncFunction());

console.log('end');