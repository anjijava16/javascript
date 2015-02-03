var express = require('express');
var app = express();
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var routes = require('./routes/index');
var config = require('./config');
var util = require('./middleware/utilities');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
// need to use signed cookie when using session
app.use(cookieParser(config.secret));
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true,
  store: new RedisStore(
    {url: config.url}
  )
}));
//app.use(bodyParser.json());
// need to use bodyParser below for form post parser req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(util.addVariablesToTemplates);

app.get('/', routes.index);
app.get(config.routes.login, routes.login);
app.post(config.routes.login, routes.loginProcess);
app.get(config.routes.logout, routes.logout);
app.get(config.routes.chat, routes.chat);

app.listen(3000, function(){
  console.log('app started at port 3000');
});
