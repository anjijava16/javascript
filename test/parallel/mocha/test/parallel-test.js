'use strict'
var expect = require("chai").expect;
var deasync = require("deasync");

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

// DO NOT put the long run code inside of mocha it. Only use mocha it to log result.
describe('parallel data driven', function(){
    var count = 1;
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    itEach(testData, function(data, testsFinished){
        console.log(count++);

        setTimeout(function () {
            console.log("timeout: " + data.name);

            it(data.name + "should not be 'Tom'", function() {
                expect(data.name).to.not.equals('Tom');
            });

            testsFinished();
        }, 1000);
    });
});
