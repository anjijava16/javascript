var express = require('express');

var app = express();

app.use(function(req,res,next) {
    var cluster = require('cluster');
    console.log(cluster);
    next();
});

app.use(function(req, res, next){
    console.log('termiating request');
    res.send('thanks for playing!');
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
