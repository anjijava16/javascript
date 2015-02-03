var util = require('../middleware/utilities');
var config = require('../config');

function index(req, res){
  console.log('cookies:');
  console.log(req.cookies);
  console.log('signedCookies:');
  console.log(req.signedCookies);
  res.cookie('IndexCookie', 'This was set from Index');
  res.render('index',
    {
      title: 'dynamic title',
      cookie: JSON.stringify(req.cookies),
      session: JSON.stringify(req.session),
      signedCookie: JSON.stringify(req.signedCookies)
    });
};
function login(req, res){
  res.render('login', {title: 'Login', message: req.flash('error')});
};

function logOut(req, res){
  util.logOut(req.session);
  res.redirect('/');
};

function loginProcess(req, res){
  console.log('#loginProcess');
  console.log(req.body.username);
  var isAuth = util.auth(req.body.username, req.body.password, req.session);
  if(isAuth){
    res.redirect('/chat');
  }
  else{
    req.flash('error', 'Wrong Username or Password');
    res.redirect(config.routes.login);
  }
  //console.log(req.body);
  //res.send(req.body.username + ' ' + req.body.password);
};
function chat(req, res){
  res.render('chat', {title: 'chat'});
};

module.exports.index = index;
module.exports.login = login;
module.exports.logOut = logOut;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;
