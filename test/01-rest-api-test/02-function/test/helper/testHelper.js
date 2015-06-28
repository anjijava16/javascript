'use strict';
var expect = require('chai').expect;
var ApiTest = require('../common/apiTest').ApiTest;
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
  ApiTest.Request.get(config.url, path, validate);
};

exports.expect = expect;
exports.ApiTest = ApiTest;
exports.config = config;
exports.removeTaggingFromTitle = removeTaggingFromTitle;
exports.getRequest = getRequest;
