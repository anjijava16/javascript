var express = require('express');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    // send file
    res.render('index');
});

app.get('/contact', function(req, res) {
    // send file
    res.render('contact');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

