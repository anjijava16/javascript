/**
 * Processing Client responses
 */

var http = require('http');

var clientOptions = {
    host: 'localhost',
    port: '3000',
    path: '/',
    method: 'GET'
};

var clientReq = http.request(clientOptions, function (res) {
    //work with status codes
    switch (res.statusCode) {
        case 200:
            res.setEncoding('utf8'); // unless you can read buffer chunks
            res.on('data', function (data) {
                console.log('data', data);
            });
            break;
        case 404:
            console.log('404 error');
            break;
        default:
            console.log(res.statusCode + ': ' + http.STATUS_CODES[res.statusCode]);
            break;
    }
});

clientReq.on('error', function (error) {
    throw error;
});

clientReq.setHeader('Cache-Control', 'no-cache');
clientReq.end();
