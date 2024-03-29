var request = require('supertest');
var app = require('../server/server.js');
var expect = require('chai').expect;

describe('supertest ', function () {
  describe('GOOD - end method has callback without using expect method ', function () {
    it('GOOD - set headers with options', function (done) {
      var options = {  // request headers
        'content-length': '123',
        'accept': '*/*'
      };
      var requestChain = request(app).get('/headers');
      for (var key in options) {
        var value = options[key];
        requestChain.set(key, value);
      }
      requestChain.end(function (err, res) {
        console.log(res.body);  // show request headers because request headers is returned
        expect(res.status).to.equal(200);
        done();
      })
    });
    it('headers route', function (done) {
      var requestChain = request(app).get('/headers');
      requestChain.end(function (err, res) {
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
  describe('expect method without using end method has callback ', function () {
    it('headers route', function (done) {
      request(app).
        get('/headers').
        expect('Content-Type', /json/).
        expect(200).
        end(done);
    });
    it('set headers with options', function (done) {
      var options = {  // request headers
        'content-length': '123',
        'accept': '*/*'
      }
      var requestChain = request(app).get('/headers');
      for (var key in options) {
        var value = options[key];
        requestChain.set(key, value);
      }
      requestChain.expect('Content-Type', /json/).expect(200).end(done);
    });
  });
  it('fail route - 500 status code is returned', function (done) {
    var requestChain = request(app)
      .get('/fail')
      .set('Accept', 'application/json');
    requestChain.end(function (err, res) {
      expect(res.status).to.equal(500);
      done();
    });
  });
});
