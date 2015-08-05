var request = require('supertest');
var expect = require("chai").expect;
var deasync = require("deasync");
var url = "http://localhost:3000";

describe('parallel http request', function(){
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.forEach(function(data){
        it('verify post response in callback for ' + data.name, function(done){
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
});
