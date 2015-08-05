var request = require('supertest');
var expect = require("chai").expect;
var deasync = require("deasync");
var url = "http://localhost:3000";

var itEach = function(data, mochaTest) {
    var retCount = 0;

    var logTestFinished = function() {
        retCount++;
    };

    data.forEach(function(element) {
        mochaTest(element, logTestFinished)
    });

    var sleeps = 0;
    while (retCount < data.length && sleeps++ < 50) {
        deasync.sleep(100);
    }
};

describe('GOOD iteach parallel http request', function(){
    var count = 1;
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    itEach(testData, function(data, testsFinished){
        console.log(count++);
        request(url)
            .post('/post-request')
            .set('accept', '*/*')
            .send({name: 'Tom'})
            .end(function(err, res){
                it(data.name + "should not be 'Tom'", function(){
                    expect(data.name).to.not.equals('Tom');
                });
            });
    });
    it('verify post response in callback', function(done){
        request(url)
            .post('/post-request')
            .set('accept', '*/*')
            .send({name: 'Tom'})
            .end(function(err, res){
                console.log(res.text);
                if(err) throw err;
                done();
            });
    });
});
