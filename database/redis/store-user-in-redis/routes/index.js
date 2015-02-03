var util = require('../middleware/utilities');
var config = require('../config');

var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

module.exports.index = function (req, res) {
  console.log('signedCookies:');
  console.log(req.signedCookies);
  res.render('index');
};

module.exports.clearDatabase = function (req, res) {
  client.flushdb(redis.print);
};

module.exports.register = function (req, res) {
  res.render('register');
};

module.exports.registerProcess = function (req, res) {
  var username = req.body.username;
  // check user is already registered or not
  client.sismember('username', username, function (error, value) {
    if (error) throw error;
    if (value === 0) {
      client.sadd('username', username, function (error, value) {
        if (error) throw error;
      });
    }
    res.redirect(config.routes.login);
  })
};

module.exports.login = function (req, res) {
  res.render('login');
};

module.exports.loginProcess = function (req, res) {
  var username = req.body.username;
  client.sismember('username', username, function (error, value) {
    if (error) throw error;
    if (value === 1) {
      req.session.isAuthenticated = true;
      req.session.user = {username: username};
      res.redirect(config.routes.chat);
    }
    else {
      res.redirect(config.routes.login);
    }
  });
};

module.exports.logout = function (req, res) {
  req.session.isAuthenticated = false;
  delete req.session.user;
  res.redirect('/');
};

module.exports.chat = function (req, res) {
  res.render('chat');
};
