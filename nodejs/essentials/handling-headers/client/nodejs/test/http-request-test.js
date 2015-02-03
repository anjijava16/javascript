var assert = require('chai').assert;
var http = require('http');

describe('nodejs test authorization', function () {
    it('verify top level domains available', function (done) {
        var clientOptions = {
            //"rejectUnauthorized": false,
            host: 'localhost',
            port: '3000',
            path: '/',
            method: 'GET',
            headers: {
                'Connection': 'keep-alive',
                "Authorization": "sso-key SVSNKTZD_Gagrotyae4NN6mDrA41Gme:GagvVxVZwPUkwnbLiRczkp",
                "X-Shopper-Id": "307684",
                "Accept": "application/json"
            }
        };

        var clientReq = http.request(clientOptions, function (res) {
            //work with status codes
            switch (res.statusCode) {
                case 200:
                    res.setEncoding('utf8'); // unless you can read buffer chunks
                    res.on('data', function (data) {
                        console.log('data', data);
                        done();
                    });
                    break;
                case 404:
                    var err = '404 error';
                    console.log(err);
                    assert.throw(err);
                    break;
                default:
                    console.log(res.statusCode + ': ' + http.STATUS_CODES[res.statusCode]);
                    break;
            }
        });

        clientReq.on('error', function (error) {
            assert.throw(error);
        });

        clientReq.setHeader('Cache-Control', 'no-cache');
        clientReq.end();
    });
});
