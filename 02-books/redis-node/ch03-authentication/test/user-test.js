var user = require('../passport/user');

user.findByUsername('test', function(err, user){
  console.log(user);
});

user.addUser('tom', 'ABq+sDiEbIR0fHnbzgKQCOJ9siV5CL6FmXKAI6mX7UY=',
  18, function(err, user){
  console.log(user);
});


