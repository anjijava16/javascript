var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

app.use(cookieParser('my secret'));
app.use(session({
  secret: 'my secret',
  saveUninitialized: true,
  resave: true,
  store: new RedisStore(
    {url: 'redis://localhost'}
  )
}));

// custom middleware
// set session to redis store
app.use(function(req, res, next){
  req.session.key1 = 'value1';
  next();
});

// display session that stores in redis
app.use(function(req, res, next){
  console.log('signedCookies:');
  console.log(req.signedCookies);
  if(req.session.key1){
    console.log('req.session.key1=' + req.session.key1);
  }
  next();
});

app.get('/', function(req, res){
  res.send({
    session: JSON.stringify(req.session),
    signedCookie: JSON.stringify(req.signedCookies)
  });
});

app.listen(3000, function(){
  console.log('app started at port 3000');
});
