var express = require('express');
var partials = require('express-partials');
var app = express();
var routes = require('./routes');
var errorHandlers = require('./middleware/errorhandlers');
var log = require('./middleware/log');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser('my secret'));
app.use(session({
  secret: 'my secret',
  saveUninitialized: true,
  resave: true,
  store: new RedisStore(
    {url: 'redis://localhost'})
}));

app.use(function(req, res, next){
  if(req.session.pageCount){
    req.session.pageCount++;
  }
  else{
    req.session.pageCount = 1;
  }
  next();
});

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function (req, res, next) {
  next(new Error('A contrived error'));
});
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(3000, function () {
  console.log('app started at port 3000');
});
