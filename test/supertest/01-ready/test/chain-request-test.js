var expect = require('chai').expect;
var testHelper = require("./test-helper");

var supTestHelper = testHelper.ApiTest.Helper.SuperTest;
var url = "http://localhost:3000";

describe('supertest ', function () {
  it('GET request - set headers with options', function (done) {
    var path = '/headers';
    var options = {
      'content-length': '123',
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.body);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.get(url, path, validate, options);
    //testHelper.get(url, path, validate);  // this one works too
  });
  it('POST request - set headers with options', function (done) {
    var path = '/request';
    var options = {
      //'content-length': '321',  // content-length does not work in POST
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.body);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.post(url, path, {name: 'test-post'}, validate, options);
    //testHelper.get(url, path, validate);  // this one works too
  });
  it('PUT request - set headers with options', function (done) {
    var path = '/request';
    var options = {
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.body);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.put(url, path, {name: 'test-put'}, validate, options);
    //testHelper.get(url, path, validate);  // this one works too
  });
  it('DELETE request - set headers with options', function (done) {
    var path = '/request';
    var options = {
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.body);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.delete(url, path, {name: 'test-delete'}, validate, options);
    //testHelper.get(url, path, validate);  // this one works too
  });
});
