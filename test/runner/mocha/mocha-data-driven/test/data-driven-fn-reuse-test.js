var assert = require('assert');
var data_driven = require('data-driven');

var MYAPP = {};
MYAPP.getCustomers = function(type){
  var names = ["Bill", "Will"];
  return names.map(function(item){
    return {name: item, type: type}
  })
};

var DATADRIVEN = {};
DATADRIVEN.testCustomer = function(){
  it('test-1 {type} {name}', function (ctx) {
    console.log('test-1' + ctx.type + ' customer ' + ctx.name);
  });
  it('test-2 {type} {name}', function (ctx) {
    console.log('test-2' + ctx.type + ' customer ' + ctx.name);
  });
};

describe('#data driven function reuse', function () {
  describe('vip customers', function () {
    data_driven(MYAPP.getCustomers('vip'), DATADRIVEN.testCustomer);
  });
  describe('gold customers', function () {
    data_driven(MYAPP.getCustomers('gold'), DATADRIVEN.testCustomer);
  });
});
