// kick off server by
// $ node browserTest/server-browserTest.js
// launch chrome and navigate to http://localhost:3000/user
var express = require('express');
var app = new express();
app.get('/user', function (req, res) {
  res.send(200, {name: 'tobi'});
});
app.listen(3000);
