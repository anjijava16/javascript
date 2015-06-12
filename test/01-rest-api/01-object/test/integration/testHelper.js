'use strict';
var expect = require('chai').expect;
var ApiTest = require('../common/apiTest').ApiTest;
var config = require('../config/config.json');

ApiTest.namespace("GDSitecore").Web = (function () {
  var requestProto = (function () {
    var url = config[process.env.NODE_ENV].url;
    var expectedStatus = 200;
    var proto = {
      test: function () {
        var testData = require(this.path);
        testData.variations.forEach(function (variation) {
          it(variation.name, function (done) {
            var path = testData.path + variation.queryString;
            new ApiTest.Request(url).get(path, function (error, response) {
              expect(response.status).to.equal(expectedStatus);
              variation.expected.forEach(function (item) {
                var regexp = new RegExp(item, "gi");
                var result = response.text.match(regexp);
                console.log('#response.text.match()', result);
                expect(result.length).gt(0);
              });
              done();
            });
          });
        });
      }
    };
    return proto;
  }());

  /**
   * Represents a Http request data-driven test.
   * @param {string} path - test data path
   */
  var RequestTest = function (path) {
    this.path = path;
  };

  RequestTest.prototype = requestProto;
  RequestTest.prototype.constructor = RequestTest;

  return {
    RequestTest: RequestTest
  }
}());

exports['ApiTest'] = ApiTest;
