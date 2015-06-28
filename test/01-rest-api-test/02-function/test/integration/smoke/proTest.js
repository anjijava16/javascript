'use strict';
var testHelper = require('../../helper/testHelper');
var getRequest = testHelper.getRequest;

describe('Pro Module', function () {
  it('pro test1-1 - module1 @ProModule @Smoke', function (done) {
    var path = '/get-request';
    var queryString = '?q=Ruby&l=LA&e=100';
    path += queryString;
    var expectedValue = 'Ruby';
    getRequest(path, expectedValue, done, {test: this.test});
  });
  it('pro test1-2 - module1 module2 @ProModule @Smoke', function (done) {
    var path = '/get-request';
    var queryString = '?q=WPF&l=NY&e=101';
    path += queryString;
    var expectedValue = 'WPF';
    getRequest(path, expectedValue, done, {test: this.test});
  });
  it('pro test2-1 - module1 module2 module3 @ProModule @Priority1', function (done) {
    var path = '/get-request';
    var queryString = '?q=JavaScript&l=CA&e=10';
    path += queryString;
    var expectedValue = 'JavaScript';
    getRequest(path, expectedValue, done, {test: this.test});
  });
  it('pro test2-2 - module1 module2 module3 module4 @ProModule @Priority1', function (done) {
    var path = '/get-request';
    var queryString = '?q=Java&l=WA&e=11';
    path += queryString;
    var expectedValue = 'Java';
    getRequest(path, expectedValue, done, {test: this.test});
  });
});
