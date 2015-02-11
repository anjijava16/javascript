var express = require('express');

var app = express();

app.use(function(req, res, next){
    console.log('processing request for "' + req.url + '"...');
    next();
});

app.use(function(req, res, next){
    console.log('termiating request');
    res.send('thanks for playing!');
});

app.use(function(req, res, next){
    console.log('whoops, i\'ll never get called');
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
