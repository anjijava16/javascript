var express = require('express');
var app = new express();
app.get('/headers', function (req, res) {
  res.send(200, req.headers);
});
module.exports = app;
