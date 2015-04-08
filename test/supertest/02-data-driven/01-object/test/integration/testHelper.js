'use strict';
var expect = require('chai').expect;
var Request = require('../common/apiTest').Request;
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

ApiTest.namespace("GDSitecore").Web = (function () {
  var requestProto = (function(){
    var url = config[process.env.NODE_ENV].url;
    var proto = {
      test: function () {
        var testData = require(this.path);
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
      }
    };
    return proto;
  }());

  /**
   * Represents a Http request data-driven test.
   * @param {string} path - test data path
   */
  var RequestTest = function(path){
    this.path = path;
  };

  RequestTest.prototype = requestProto;
  RequestTest.prototype.constructor = RequestTest;

  return {
    RequestTest: RequestTest
  }
}());

exports['ApiTest'] = ApiTest;
