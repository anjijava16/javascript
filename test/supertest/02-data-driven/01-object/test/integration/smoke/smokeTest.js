'use strict';
var expect = require('chai').expect;
var testHelper = require('../testHelper');
var fs = require('fs');

describe('Smoke', function () {
  describe('Module', function(){
    var web = testHelper.ApiTest.GDSitecore.Web;
    var testDataPath = './test/testData';
    var testNames = fs.readdirSync(testDataPath);
    testNames.forEach(function(testName){
      var testNamePath = '../testData/' + testName;
      var request = new web.RequestTest(testNamePath);
      request.test();
    });
  });
});
