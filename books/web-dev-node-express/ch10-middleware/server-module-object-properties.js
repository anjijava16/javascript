var express = require('express');

var app = express();

var mop = require('./lib/module-object-properties.js');

app.use(mop.firstProperty);
app.use(mop.secondProperty);

app.use(function(req, res, next){
    console.log('termiating request');
    res.send('thanks for playing!');
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
