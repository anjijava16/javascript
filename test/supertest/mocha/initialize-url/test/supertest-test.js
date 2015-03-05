var request = require('supertest');

describe('GET /users', function(){
  it('respond with json', function(done){
    var path = "http://localhost:3000";
    console.log("path", path);
    request(path)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});
