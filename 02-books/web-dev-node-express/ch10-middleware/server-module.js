var express = require('express');

var app = express();

app.use(require('./lib/module.js'));

app.use(function(req, res, next){
    console.log('termiating request\n');
    res.send('thanks for playing!');
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
