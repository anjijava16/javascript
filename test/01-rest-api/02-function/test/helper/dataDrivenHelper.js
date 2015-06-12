'use strict';
var expect = require('chai').expect;
var ApiTest = require('../common/apiTest').ApiTest;
var config = require('../config/config.' + process.env.NODE_ENV + '.json');

ApiTest.namespace("GDSitecore").dataDriven = (function () {
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

        ApiTest.Request.get(url, path, validate);
      });
    });
  };

  return {
    test: test
  }
}());

exports['ApiTest'] = ApiTest;
