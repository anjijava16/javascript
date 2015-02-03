/**
 * Processing Client responses
 */

var https = require('https');

var clientOptions = {
    "rejectUnauthorized": false,
    host: 'api.ote-godaddy.com',
    path: '/api/v1/domains/available?domain=joe.com&forTransfer=false&checkType=fast&waitMs=1000',
    method: 'GET'
};

var clientReq = https.request(clientOptions, function (res) {
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
            console.log(res.statusCode + ': ' + https.STATUS_CODES[res.statusCode]);
            break;
    }
});

clientReq.on('error', function (error) {
    throw error;
});

clientReq.setHeader('Cache-Control', 'no-cache');
clientReq.end();
