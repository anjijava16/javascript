var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

// custom middleware
// set cookie
app.use(function(req, res, next){
  res.cookie('key1', 'value1');
  next();
});

// display cookies that come from client
app.use(function(req, res, next){
  console.log(req.cookies);
  next();
});

app.get('/', function(req, res){
  res.send('Index');
});

app.listen(3000, function(){
  console.log('app started at port 3000');
});
