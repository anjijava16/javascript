var request = require('supertest');
var expect = require("chai").expect;
var deasync = require("deasync");
var url = "http://localhost:3000";

var count = 1;
describe('serial http request', function () {
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.forEach(function (data) {
        it('verify post response in callback for ' + data.name, function (done) {
            console.log("serial count: "+count++);
            request(url)
                .post('/post-request')
                .set('accept', '*/*')
                .send({name: 'Tom'})
                .end(function (err, res) {
                    console.log(res.text);
                    if (err) throw err;
                    done();
                });
        });
    });
});
