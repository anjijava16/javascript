var express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.status(200).send({name: 'tobi'});
});

module.exports = app;
