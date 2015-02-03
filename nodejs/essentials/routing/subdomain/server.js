var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('home');
});

app.get('/about', function(req, res) {
    res.send('about');
});

var admin = express.Router();
var vhost = require('vhost');

app.use(vhost('admin.*', admin));

admin.get('/', function(req, res){
    res.send('admin - home');
});

admin.get('/users', function(req, res){
    res.send('admin - users');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

