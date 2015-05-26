var request = require('supertest');

describe('GET /users', function () {
  it('respond with json', function (done) {
    var path = "http://localhost:3000";
    request(path)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('verify response', function (done) {
    var path = "http://localhost:3000";
    request(path)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        console.log(res);
        done();
      });
  });
});
