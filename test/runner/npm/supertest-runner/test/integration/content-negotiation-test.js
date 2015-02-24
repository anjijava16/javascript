var request = require('supertest');
var app = require('../../app/server.js');
var should = require('should');

describe('node server', function () {
  it('node server url (/) returns the correct json', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        //res.body.name.should.equal('index');
        console.log(res.body);
        done();
      });
  });
});
