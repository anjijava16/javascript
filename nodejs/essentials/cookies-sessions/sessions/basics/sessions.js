var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({secret: 'my secret'}));

// custom middleware
// set session
app.use(function(req, res, next){
  req.session.key1 = 'value1';
  next();
});

// display session that stores in server
app.use(function(req, res, next){
  if(req.session.key1){
    console.log('req.session.key1=' + req.session.key1);
  }
  next();
});

app.get('/', function(req, res){
  res.send('Index');
});

app.listen(3000, function(){
  console.log('app started at port 3000');
});
