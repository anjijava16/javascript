function SyncFunction(){
  var ret;
  setTimeout(function(){
    ret = "hello";
  },2000);
  while(ret === undefined) {
    require('deasync').sleep(100);
  }
  // returns hello with sleep; undefined without
  return ret;
}

var result = SyncFunction();
console.log(result);
console.log('end');
