var request = require('supertest');
var app = require('../server/server.js');
var assert = require('assert');

describe('supertest ', function () {
  describe('expect method without using end method has callback ', function () {
    it('headers route', function (done) {
      request(app).
        get('/headers').
        expect('Content-Type', /json/).
        expect(200).
        end(done);
    });
    it('set headers with options', function (done) {
      var options = {
        headers: {
          'content-length': '123',
          'accept': '*/*'
        }
      }
      var requestChain = request(app).get('/headers');
      if (options.headers) {
        for (var key in options.headers) {
          var value = options.headers[key];
          requestChain.set(key, value);
        }
      }
      requestChain.expect('Content-Type', /json/).expect(200).end(done);
    });
  });
  describe('end method has callback without using expect method ', function () {
    it('headers route', function (done) {
      var requestChain = request(app).get('/headers');
      requestChain.end(function (err, res) {
        console.log(res.status);
        assert(res.status, 200, 'status code is not 200');
        done();
      });
    });
    it('set headers with options', function (done) {
      var options = {
        headers: {
          'content-length': '123',
          'accept': '*/*'
        }
      };
      var requestChain = request(app).get('/headers');
      if (options.headers) {
        for (var key in options.headers) {
          var value = options.headers[key];
          requestChain.set(key, value);
        }
      }
      requestChain.end(function (err, res) {
        assert(res.status, 200, 'status code is not 200');
        done();
      })
    });
  });
  it('try catch', function (done) {
    var options = {
      headers: {
        'test': 'fail'
      }
    };
    var requestChain = request(app).get('/try');
    if (options.headers) {
      for (var key in options.headers) {
        var value = options.headers[key];
        requestChain.set(key, value);
      }
    }
    requestChain.end(function (err, res) {
      assert(res.status, 500, 'status code is not 500');
      done();
    });
  });
  it('fail route', function (done) {
    var requestChain = request(app)
      .get('/fail')
      .set('Accept', 'application/json');
    requestChain.end(function (err, res) {
      assert(res.status, 500, 'status code is not 500');
      done();
    });
  });
});
