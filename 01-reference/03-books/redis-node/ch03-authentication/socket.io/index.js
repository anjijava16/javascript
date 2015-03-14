var io = require('socket.io');
var cookie = require('cookie');
var cookieParser = require('cookie-Parser');
var expressSession = require('express-session');
var ConnectRedis = require('connect-redis')(expressSession);
var redisAdapter = require('socket.io-redis');
var redis = require('redis');
var config = require('../config');
var redisSession = new ConnectRedis({host: config.redisHost, port: config.redisPort});

var socketAuth = function(socket, next){
  var handshakeData = socket.request;
  var parsedCookie = cookie.parse(handshakeData.headers.cookie);
  var sid = cookieParser.signedCookie(parsedCookie['connect.sid'], config.secret);
  console.log(parsedCookie['connect.sid']);
  console.log(sid);

  if(parsedCookie['connect.sid'] === sid){
    return next(new Error('Not Authenticated'));
  }

  redisSession.get(sid, function(err, session){
    if(session.isAuthenticated){
      socket.user = session.user;
      socket.sid = sid;
      return next();
    }
    else{
      return next(new Error('Not Authenticated'));
    }
  });
};

var socketConnection = function (socket){
  socket.emit('message', {message: 'Hey!'});
  socket.emit('message', socket.user);
};

exports.startIo = function (server){
  io = io.listen(server);
  io.adapter(redisAdapter({host: config.redisHost, port: config.redisPort}));
  var chat = io.of('/chat');
  chat.use(socketAuth);
  chat.on('connection', socketConnection);
  return io;
};
