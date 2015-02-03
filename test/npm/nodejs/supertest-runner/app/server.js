// node.js server
var express = require('express');
var app = new express();
app.get('/', function(req, res){
  res.format({
    'text/plain': function(){
      res.send('welcome plain text');
    },
    'text/html': function(){
      res.send('<b>welcome html</b>');
    },
    'text/xml': function(){
      res.send('<person>welcome xml</person>');
    },
    'application/json': function(){
      res.json({message: 'welcome json'});
    },
    'default': function(){
      res.send(406, 'Not Acceptable');
    }
  });
});
app.get('/user', function (req, res) {
  res.send(200, {name: 'tobi'});
});
module.exports = app;
