var assert = require('assert');
var data_driven = require('data-driven');

function getCustomers(){
  return [{name: "fn Tom"}, {name: "fn Harry"}];
}

var CUSTOMERS = [{name: "Bill"}, {name: "Will"}];
describe('#get data from sync fn', function () {
  before(function(){
    CUSTOMERS = [{name: "before Tom"}, {name: "before Harry"}];
  });
  describe('data driven tests', function () {
    data_driven(getCustomers(), function () {
      it('{name}', function (ctx) {
        console.log(ctx.name);
      });
    });
  });
});
