var assert = require('assert');
var data_driven = require('data-driven');
var deasync = require('deasync');

function getCustomers(cb){
  // simulate long run
  setTimeout(function(){
    cb(null, [{name: "async fn Tom"}, {name: "async fn Harry"}]);  // follow cb(err, result) pattern
  }, 2000);
}

function getCustomersSync(){
  var ret;
  getCustomers(function(err, result){
    ret = result;
  });
  while(ret === undefined) {
    deasync.sleep(100);
  }
  console.log('completed');
  // returns customers with sleep; undefined without
  return ret;
}

describe('#get data from async fn through sync fn', function () {
  describe('data driven tests', function () {
    // get data from sync function that uses deasync to wait for async fn complete
    data_driven(getCustomersSync(), function () {
      it('{name}', function (ctx) {
        console.log(ctx.name);
      });
    });
  });
});
