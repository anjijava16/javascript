var request = require('supertest');
var expect = require("chai").expect;
var deasync = require("deasync");
var url = "http://localhost:3000";

/*
 Problem: Running http request tests inside of mocha "it" is SLOW
 http request runs async that is out side of V8 runtime stack, but mocha "it" blocks stack to wait for a test to finish.
 So running http request tests inside of mocha become sync.

 Solution: running http request tests concurrently again that is FAST
 Running http request tests outside of mocha "it", and put mocha "it" inside of response callback just to verify response.

 */
var itEach = function(items, requestTest) {
    var retCount = 0;

    var testFinished = function() {
        retCount++;
    };

    items.forEach(function(item) {
        requestTest(item, testFinished)
    });

    var sleeps = 0;
    while (retCount < items.length && sleeps < 50) {
        console.log(sleeps++);
        deasync.sleep(100);
    }
    console.log("final sleep count: "+sleeps);
    if(sleeps == 50) throw new Error("TIMEOUT");

};

var count = 1;
describe.only('parallel http request', function () {
    var items = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    itEach(items, function(item, testFinished){
        console.log("parallel count: " + count++);
        request(url)
            .post('/post-request')
            .set('accept', '*/*')
            .send({name: 'Tom'})
            .end(function (err, res) {
                it(item.name + " should not be 'Tom'", function(){
                    expect(item.name).to.not.equals('Tom');
                });
                testFinished();
            });

    });
});
