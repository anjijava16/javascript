'use strict';
var expect = require('chai').expect;
var config = require('../../config/config.' + process.env.NODE_ENV + '.json');
var ApiTest = require('../../common/apiTest').ApiTest;

var url = undefined;
describe('P1 Pro', function () {
  before(function () {
    url = config.url;
  });
  it('pro test1-1 - module1 module2 module3', function (done) {
    var path = '/get-request';
    var queryString = '?q=Ruby&l=LA&e=100';
    path += queryString;
    var expectedStatus = 200;
    var expectedValue = 'Ruby';
    var validate = function (error, response) {
      expect(response.status).to.equal(expectedStatus);
      var regexp = new RegExp(expectedValue, "gi");
      var result = response.text.match(regexp);
      console.log('#response.text.match()', result);
      expect(result.length).gt(0);
      done();
    };
    ApiTest.Request.get(url, path, validate);
  });
});
