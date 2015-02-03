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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
    res.send('home');
});

app.get('/about', function(req, res){
    res.send('about');
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

