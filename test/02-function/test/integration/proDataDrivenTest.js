'use strict';
var expect = require('chai').expect;
var testHelper = require('../helper/testHelper');
var fs = require('fs');

describe('Smoke Data-Driven Test', function () {
  describe('Module', function () {
    var testDataPath = './test/testData';
    var testNames = fs.readdirSync(testDataPath);
    testNames.forEach(function(testName){
      var testNamePath = '../testData/' + testName;

      testHelper.dataDriven(testNamePath);
    });
  });
});
