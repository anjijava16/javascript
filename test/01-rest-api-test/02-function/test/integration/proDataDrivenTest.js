'use strict';
var expect = require('chai').expect;
var dataDrivenHelper = require('../helper/dataDrivenHelper');
var fs = require('fs');

var dataDrivenHelper = dataDrivenHelper.HttpClient.GDSitecore.dataDriven;

describe('Smoke Data-Driven Test', function () {
  describe('Module', function () {
    var testDataPath = './test/testData';
    var testNames = fs.readdirSync(testDataPath);
    testNames.forEach(function(testName){
      var testNamePath = '../testData/' + testName;

      dataDrivenHelper.test(testNamePath);
    });
  });
});
