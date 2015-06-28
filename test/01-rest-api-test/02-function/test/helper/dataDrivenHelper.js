'use strict';
var expect = require('chai').expect;
var HttpClient = require('../common/httpClient').HttpClient;
var config = require('../config/config.' + (process.env.NODE_ENV || 'development') + '.json');

HttpClient.namespace("GDSitecore").dataDriven = (function () {
  var test = function (path) {
    var url = config.url;
    var expectedStatus = 200;

    var testData = require(path);

    testData.variations.forEach(function (variation) {
      it(variation.name, function (done) {
        var path = testData.path + variation.queryString;
        var validate = function (error, response) {
          expect(response.status).to.equal(expectedStatus);
          variation.expected.forEach(function (item) {
            var regexp = new RegExp(item, "gi");
            var result = response.text.match(regexp);
            console.log('#response.text.match()', result);
            expect(result.length).gt(0);
          });
          done();
        };

        HttpClient.Request.get(url, path, validate);
      });
    });
  };

  return {
    test: test
  }
}());

exports['HttpClient'] = HttpClient;
