var assert = require('assert');
var data_driven = require('data-driven');
var MYAPP = require('../src/myapp');
var SMOKE = require('./helper/SMOKE');

describe.only('#data driven function reuse', function () {
  describe('vip customers', function () {
    data_driven(MYAPP.getCustomers('vip'), SMOKE.testCustomer);
  });
  describe('gold customers', function () {
    data_driven(MYAPP.getCustomers('gold'), SMOKE.testCustomer);
  });
});
