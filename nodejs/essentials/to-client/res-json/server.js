var express = require('express');

var app = express();

app.get('/', function (req, res) {
    // send json
    res.json({name: "index"});
});

app.get('/contact', function(req, res) {
    // send json
    res.json({name: "contact"});
});

app.listen(3000, function () {
  console.log('app started at port 3000');
});
