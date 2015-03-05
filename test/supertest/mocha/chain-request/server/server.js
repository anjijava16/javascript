var express = require('express');
var app = new express();
app.get('/headers', function (req, res) {
  res.status(200).send(req.headers);
});
app.get('/fail', function (req, res) {
  res.status(500).send({result: 'fail'});
});
app.get('/try', function(req, res){
  if(req.headers.test === "fail"){
    console.log('#fail');
    res.status(500).send({result: 'fail'});
  }
  else {
    res.send(400, {result: "pass"});
  }
});

module.exports = app;
