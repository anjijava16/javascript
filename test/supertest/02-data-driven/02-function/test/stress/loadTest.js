'use strict';
var loadtest = require('loadtest');
var expect = require('chai').expect;

describe('Load tests', function () {
  it('get-request', function (done) {
    var url = 'http://localhost:3000';
    var path = '/get-request';
    var queryString = '?q=Ruby&l=LA&e=100';
    var options = {
      url: url + path + queryString,
      concurrency: 4,
      maxRequests: 100
    };
    loadtest.loadTest(options, function(err,result){
      expect(!err);
      expect(result.totalTimeSeconds < 1);
      console.log(result);
      done();
    });
  });
});
