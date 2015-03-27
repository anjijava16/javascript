var express = require('express');
var app = new express();
app.get('/headers', function (req, res) {
  res.status(200).send(req.headers);
});
app.get('/fail', function (req, res) {
  res.status(500).send({result: 'fail'});
});

module.exports = app;
