// use mocha to run the test below
// $ mocha superTest/client-superTest.js
var request = require('supertest');
var app = require('../server.js');
var should = require('should');

describe('request(url)', function () {
  it('should be supported', function (done) {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
//  .expect('Content-Length', '20')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        res.body.name.should.equal('tobi');
        console.log('pass');

        done();
      });
  });
});
