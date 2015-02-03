var express = require('express');

var app = express();

app.get('/', function (req, res) {
    // send string
    res.send('index');
});

app.get('/user(name)?', function(req, res) {
    // send string
    res.send('user');
});

app.get('/khaa+n', function(req, res) {
    // send string
    res.send('khaaan');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

