var express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.status(200).send({name: 'tobi'});
});

app.get('/', function(req, res){
  res.status(200).send({name: 'bla'});
});

app.listen(3000, function () {
  console.log('app started at port 3000');
});
