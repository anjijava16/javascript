var request = require('supertest');
var expect = require('chai').expect;

describe('GET request', function () {
  it('verify au.godaddy response', function (done) {
    var path = "https://au.godaddy.com";
    request(path)
      .get('')
      .expect(200)
      .end(function (err, res) {
        expect(res).to.exist;
        //console.log(res);
        done();
      });
  });
  it('verify au.dev-godaddy response', function (done) {
    var path = "https://au.dev-godaddy.com";
    request(path)
      .get('')
      .expect(200)
      .end(function (err, res) {
        expect(res).to.exist;
        //console.log(res);
        done();
      });
  });
});
