var express = require('express');
var multer  = require('multer');

var app = express();
app.use(multer({ dest: './uploads/'}))

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/signup', function(req, res){
    res.render('signup-file', {title: 'Signup upload file!'});
});

app.post('/signup', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log(req.files);
    res.json(req.files);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

