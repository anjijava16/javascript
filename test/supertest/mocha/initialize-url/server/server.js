var express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.status(200).send({name: 'tobi'});
});

app.listen(3000, function () {
  console.log('app started at port 3000');
});
