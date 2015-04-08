'use strict';
var expect = require('chai').expect;
var apiTest = require('../common/apiTest');
var config = require('../config/config.json');

var ApiTest = {
  namespace: function (name) {
    var parts = name.split('.');
    var ns = this;
    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }
    return ns;
  }
};

ApiTest.namespace("Sitecore").Web = (function () {
  var test = function(name){
    var url = config[process.env.NODE_ENV].url;
    var statusCode = 200;
    var testData = require(name);
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

        apiTest.Request.get(url, path, validate);
      });
    });
  };
  return {
    test: test
  }
}());

exports['ApiTest'] = ApiTest;
