var request = require('supertest');

// TODO: need to fingure out how to fix "Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE"
describe('supertest test authorization', function () {
    it('verify top level domains available', function (done) {
        request('http://localhost:3000/')
            .get('/')
            .set('Connection', 'keep-alive')
            .set('Accept', 'application/json')
            .set('X-Shopper-Id', '307684')
            .set('Authorization', 'sso-key SVSNKTZD_Gagrotyae4NN6mDrA41Gme:GagvVxVZwPUkwnbLiRczkp')
            //.expect('Content-Type', /json/)
            //.expect(200)
            //.expect(function (res) {
            //    console.log(res.body);
            //})
            .end(done);
    });
});
