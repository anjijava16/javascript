var io = require('socket.io').listen(4000);

io.sockets.on('connection', function(socket){
  socket.on('join', function(data){
    socket.broadcast.emit('userJoined', data);
    socket.username = data.username;
  });
  socket.on('ping', function(data){
    console.log(data);
    socket.broadcast.emit('ping', {username: socket.username});
  });
  socket.on('disconnect', function(){
    socket.broadcast.emit('userDisconnect', {username: socket.username});
  });
});
