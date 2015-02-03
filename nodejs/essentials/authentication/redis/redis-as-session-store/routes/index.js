var util = require('../middleware/utilities');
var config = require('../config');

module.exports.index = function(req, res){
  console.log('signedCookies:');
  console.log(req.signedCookies);
  res.render('index');
};

module.exports.login = function(req, res){
  res.render('login');
};

module.exports.loginProcess = function(req, res){
  var isAuth = util.auth(req.body.username, req.body.password, req.session);
  if(isAuth){
    res.redirect(config.routes.chat);
  }
  else{
    res.redirect(config.routes.login);
  }
};

module.exports.logout = function(req, res){
  util.logOut(req.session);
  res.redirect('/');
};

module.exports.chat = function(req, res){
  res.render('chat');
};
