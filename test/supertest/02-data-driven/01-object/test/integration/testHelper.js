'use strict';
var expect = require('chai').expect;
var apiTest = require('../common/apiTest').ApiTest;
var config = require('../config/config.json');

apiTest.namespace("Sitecore").Web = (function () {
  var test = function(name){
    var url = config[process.env.NODE_ENV].url;
    var statusCode = 200;
    var testData = require('../testData/' + name + '.json');
    testData.variations.forEach(function (variation) {
      it(variation.name, function (done) {
        var path = testData.path + variation.queryString;
        var validate = function (error, response) {
          expect(response.status).to.equal(statusCode);
          variation.expected.forEach(function (item) {
            var regexp = new RegExp(item, "gi");
            var result = response.text.match(regexp);
            console.log('#response.text.match()', result);
            expect(result.length).gt(0);
          });
          done();
        };

        var Request = apiTest.SuperTest.Request;
        new Request(url).get(path, validate);
      });
    });
  };
  return {
    test: test
  }
}());

exports['ApiTest'] = apiTest;
