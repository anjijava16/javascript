// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();
// A route for the home page
app.get('/', function(req, res) {
    res.status(200);
    // set header
    res.set('x-ample', 'trigger!');
    res.send('Hi from express http.createServer!');
});

// Start the app
http.createServer(app).listen(3000, function() {
    console.log('App started at port 3000');
});
