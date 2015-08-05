var expect = require('chai').expect;
var testHelper = require("./test-helper");

var supTestHelper = testHelper.ApiTest.Helper.SuperTest;
var url = "http://localhost:3000";

var request = require('supertest');

describe('supertest ', function () {
  it('GET request with queryString - set headers with options', function (done) {
    var path = '/get-request';
    var queryString = '?q=JavaScript&l=CA&e=10';
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

    supTestHelper.get(url, path + queryString, validate, options);
    //supTestHelper.get(url, path, validate);  // this one works too
  });
  it('SuperTest POST request - set headers with options', function (done) {
    var path = '/post-request';
    var options = {
      //'content-length': '321',  // content-length does not work in POST
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.text);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    var body = {name: 'test-post'};

    request(url)
        .post(path)
        .set('accept', "*/*")
        .send(body)
        .end(validate);
  });
  it('POST request - set headers with options', function (done) {
    var path = '/post-request';
    var options = {
      //'content-length': '321',  // content-length does not work in POST
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.text);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.post(url, path, {name: 'test-post'}, validate, options);
  });
  it('PUT request - set headers with options', function (done) {
    var path = '/put-request';
    var options = {
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.text);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.put(url, path, {name: 'test-put'}, validate, options);
  });
  it('DELETE request - set headers with options', function (done) {
    var path = '/delete-request';
    var options = {
      'accept': '*/*'
    };
    var statusCode = 200;
    var validate = function (err, res) {
      console.log('#res.body: ', res.text);  // show request headers because request headers is returned
      expect(res.status).to.equal(statusCode);
      done();
    };

    supTestHelper.delete(url, path, {name: 'test-delete'}, validate, options);
  });
});
