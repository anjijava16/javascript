var express = require('express');

var app = express();

// to enable POST data handling, load bodyParser middleware
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.send('home');
});

app.get('/signup', function(req, res){
    res.render('signup-text', {title: 'Signup text!'});
});

app.post('/signup', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    res.json(req.body);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

