var config = require('../config');

module.exports.auth = function(username, password, session){
  var isAuth = username === 'tom' || username === 'harry';
  if(isAuth){
    session.isAuthenticated = isAuth;
    session.user = {username: username};
  }
  return isAuth;
};

module.exports.logOut = function (session){
  session.isAuthenticated = false;
  delete session.user;
};

module.exports.addVariablesToTemplates = function(req, res, next){
  // templates can access res.locals variables
  res.locals.isAuthenticated = req.session.isAuthenticated;
  if(req.session.isAuthenticated){
    res.locals.user = req.session.user;
  }

  res.locals.routes = config.routes;
  next();
};


