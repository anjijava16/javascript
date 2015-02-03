var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('index');
});

app.get('/about', function(req, res) {
    res.send('about');
});

app.get('/cart', function(req, res) {
    res.send('cart');
});

app.get('/cart/checkout', function(req, res) {
    res.send('cart - checkout');
});

app.get('/contact', function(req, res) {
    res.send('contact');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
