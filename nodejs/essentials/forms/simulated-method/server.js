var express = require('express');
var methodOverride = require('method-override');

var app = express();
app.use(methodOverride());

// to enable POST data handling, load bodyParser middleware
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/request', function(req, res){
    res.render('request', {title: 'Signup text!'});
});

app.post('/request', function(req, res){
    console.log('PUT: ' + req.body.name);
    res.send('PUT: ' + req.body.name);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

