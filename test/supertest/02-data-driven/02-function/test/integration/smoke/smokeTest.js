'use strict';
var expect = require('chai').expect;
var testHelper = require('../testHelper');
var fs = require('fs');

var web = testHelper.ApiTest.Sitecore.Web;

describe('Smoke', function () {
  describe('Module', function () {
    var testDataPath = './test/testData';
    var testNames = fs.readdirSync(testDataPath);
    testNames.forEach(function(testName){
      var testNamePath = '../testData/' + testName;
      web.test(testNamePath);
    });
  });
});
