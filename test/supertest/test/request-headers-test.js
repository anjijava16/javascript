var request = require('supertest');
var app = require('../server/server.js');

describe('headers', function () {
  it('default headers', function (done) {
    var requestChain = request(app).get('/headers').expect('Content-Type', /json/).expect(200);
    requestChain.end(function (err, res) {
      console.log(res.body);
      done();
    });
  });
  it('set headers with options', function (done) {
    var options = {
      headers: {
        'content-length': '123',
        'accept': '*/*'
      }
    }
    var requestChain = request(app).get('/headers').expect('Content-Type', /json/).expect(200);
    if (options.headers) {
      for (var key in options.headers) {
        var value = options.headers[key];
        requestChain.set(key, value);
      }
    }
    requestChain.end(function (err, res) {
      console.log(res.body);
      done();
    });
  });
});
