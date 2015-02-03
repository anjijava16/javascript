var request = require('supertest');
var app = require('../../app/server.js');
var should = require('should');

describe('supertest node server', function () {
  it('node server url (/user) returns the correct json', function (done) {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        res.body.name.should.equal('tobi');
        done();
      });
  });
});
