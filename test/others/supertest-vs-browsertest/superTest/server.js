var express = require('express');
var app = new express();
app.get('/user', function (req, res) {
  res.send(200, {name: 'tobi'});
});
module.exports = app;
