var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('index');
});

app.get('/contact', function (req, res) {
    res.send('contact');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

