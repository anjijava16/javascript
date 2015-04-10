'use strict';
var expect = require('chai').expect;
var config = require('../../config/config.json');
var ApiTest = require('../../common/apiTest').ApiTest;

var url = undefined;
describe('Smoke', function () {
  describe('Module', function () {
    before(function () {
      url = config[process.env.NODE_ENV].url;
    });
    it('test1-1', function (done) {
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
    it('test1-2', function (done) {
      var path = '/get-request';
      var queryString = '?q=WPF&l=NY&e=101';
      path += queryString;
      var expectedStatus = 200;
      var expectedValue = 'WPF';
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
    it('test2-1', function (done) {
      var path = '/get-request';
      var queryString = '?q=JavaScript&l=CA&e=10';
      path += queryString;
      var expectedStatus = 200;
      var expectedValue = 'JavaScript';
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
    it('test2-2', function (done) {
      var path = '/get-request';
      var queryString = '?q=Java&l=WA&e=11';
      path += queryString;
      var expectedStatus = 200;
      var expectedValue = 'Java';
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
});
