'use strict';
var expect = require('chai').expect;
var HttpClient = require('../common/httpClient').HttpClient;
var config = require('../config/config.' + (process.env.NODE_ENV || 'development') + '.json');

var removeTaggingFromTitle = function (test){
  var re = /@\w+/g;
  var matches = test.fullTitle().match(re);
  test.title = test.title.replace(re, '');
};

var getRequest = function(path, expectedValue, done, options){
  var options = options || {};
  if(options.test && process.env.REMOVE_TAGGING){
    //console.log(options.test);
    removeTaggingFromTitle(options.test);
  }
  var expectedStatus = 200;
  var validate = function (error, response) {
    expect(response.status).to.equal(expectedStatus);
    var regexp = new RegExp(expectedValue, "gi");
    var result = response.text.match(regexp);
    console.log('#response.text.match()', result);
    expect(result.length).gt(0);
    done();
  };
  HttpClient.get(config.url, path, validate);
};

var dataDriven = function (path) {
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

      HttpClient.get(url, path, validate);
    });
  });
};

exports.dataDriven = dataDriven;
exports.getRequest = getRequest;
