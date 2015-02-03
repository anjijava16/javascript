var http = require('http');

var clientOptions = {
  host: 'localhost',
  port: '3000',
  path: '/about',
  method: 'GET'
};

var clientReq = http.request(clientOptions, function (res) {
  //work with status codes
  switch (res.statusCode) {
    case 200:
      res.setEncoding('utf8'); // unless you can read buffer chunks
      res.on('data', function (data) {
        console.log('Data: ' + data);
      });
      break;
    default:
      console.log('Default: ' + res.statusCode);
      break;
  }
});

clientReq.on('error', function (error) {
  console.log('Error:');
  console.log(error);
});

clientReq.setHeader('Cache-Control', 'no-cache');
clientReq.end();
