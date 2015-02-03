var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// signed cookie
app.use(cookieParser('my secret'));

// custom middleware
// set cookie
app.use(function(req, res, next){
  res.cookie('signed-key-1', 'signed-value-1', {signed: true});
  next();
});

// display cookies that come from client
app.use(function(req, res, next){
  console.log(req.signedCookies);
  next();
});

app.get('/', function(req, res){
  res.send('Index');
});

app.listen(3000, function(){
  console.log('app started at port 3000');
});
