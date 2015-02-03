var http = require('http');

var user = {
  name: 'tom@gmail.com',
  email: 'Tom'
};
var userString = JSON.stringify(user);
// MUST set Content-Type to json to make post data work
var headers = {
  'Content-Type': 'application/json'
};
var clientOptions = {
  host: 'localhost',
  port: '3000',
  path: '/signup',
  method: 'POST',
  headers: headers
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
clientReq.write(userString);  // POST data here
clientReq.end();
