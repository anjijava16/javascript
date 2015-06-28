'use strict';
var testHelper = require('../testHelper');
var validateGetRequest = testHelper.validateGetRequest;

describe('Personalization', function () {
  it('Personalization test1-1 @Smoke', function (done) {
    var path = '/get-request';
    var queryString = '?q=Ruby&l=LA&e=100';
    path += queryString;
    var expectedValue = 'Ruby';
    validateGetRequest(path, expectedValue, done, {test: this.test});
  });
});
