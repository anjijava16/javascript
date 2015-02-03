var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index', {templateType: 'ejs'});
});

// about page
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000, function () {
    console.log("App Started on PORT 3000");
});
