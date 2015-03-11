var assert = require('assert');
var data_driven = require('data-driven');

var CUSTOMERS = [{name: "Bill"}, {name: "Will"}];
describe('#change data in before()', function () {
  before(function(){
    CUSTOMERS = [{name: "before Tom"}, {name: "before Harry"}];
  });
  describe('data driven tests', function () {
    // unable to change customers (testdata) in before()
    // because it does not wait for before() executed
    data_driven(CUSTOMERS, function () {
      it('{name}', function (ctx) {
        console.log(ctx.name);
      });
    });
  });
});
