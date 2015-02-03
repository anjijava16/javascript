var config = require('../config');

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


