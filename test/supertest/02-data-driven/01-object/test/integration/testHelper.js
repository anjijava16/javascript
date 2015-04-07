'use strict';
var expect = require('chai').expect;
var Request = require('../common/apiTest').Request;
var config = require('../config/config.json');

var ApiTest = Object.create(Object.prototype, {
  namespace: {
    value: function (name) {
      var parts = name.split('.');
      var ns = this;
      for (var i = 0, len = parts.length; i < len; i++) {
        ns[parts[i]] = ns[parts[i]] || {};
        ns = ns[parts[i]];
      }
      return ns;
    },
    writable: false
  }
});

ApiTest.namespace("Sitecore").Web = (function () {
  var test = function (namePath) {
    var url = config[process.env.NODE_ENV].url;
    var testData = require(namePath);
    testData.variations.forEach(function (variation) {
      it(variation.name, function (done) {
        var path = testData.path + variation.queryString;
        new Request(url).get(path, function (error, response) {
          expect(response.status).to.equal(200);
          variation.expected.forEach(function (item) {
            var regexp = new RegExp(item, "gi");
            var result = response.text.match(regexp);
            expect(result.length).gt(0);
          });
          done();
        });
      });
    });
  };
  return {
    test: test
  }
}());

exports['ApiTest'] = ApiTest;
