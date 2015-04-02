'use strict';
var expect = require('chai').expect;
var testHelper = require('../testHelper');

var web = testHelper.ApiTest.Sitecore.Web;

describe('Smoke', function () {
  describe('getTest1', function () {
    web.test('getTest1');
  });
});
