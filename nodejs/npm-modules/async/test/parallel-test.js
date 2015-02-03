var assert = require('assert');
var async = require('async');

function longRun(waitTime, cb){
  setTimeout(function(){
    console.log(waitTime);
    cb();
  }, waitTime);
}

describe('async parallel tests', function() {
  ITEMS = [200,300,100];
  it('inline wait for async callbacks to complete', function (done) {
    var calls = [];

    ITEMS.forEach(function(item){
      calls.push(function(callback) {
        setTimeout(function(){
          console.log(item);
          callback();
        }, item);
      })
    });
    async.parallel(calls, function() {
      /* this code will run after all calls finished the job or
       when any of the calls passes an error */
      done();
    });
  });
  it('wait for longRun async callbacks to complete', function (done) {
    var calls = [];

    ITEMS.forEach(function(item){
      calls.push(function(callback){
        longRun(item, callback);
      });
    });

    async.parallel(calls, function() {
      /* this code will run after all calls finished the job or
       when any of the calls passes an error */
      done();
    });
  });
});
