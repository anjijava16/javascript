var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');
var hat = require('hat');

var token = hat();

function check_token(client, token){
  console.log('check: ' + token);
  client.hget('login:', token, function(error, value){
    if(error) throw error;
    redis.print(error, value);
    if(value != null) {
      console.log('token is found');
    }
    else{
      throw new Error('token is NOT found');
    }
  });
}

function update_token(client, token, user, item){
  // get the timestamp
  var timestamp = Date.now();
  // keep a mapping from the token to the logged-in user
  console.log('update: ' + token);
  client.hset('login:', token, user);
  // record when the token was last seen.
  client.zadd('recent:', timestamp, token);
  if(item){
    // record that the user viewed the item.
    client.zadd('viewed:' + token, timestamp, item);
    // remove old items, keeping the most recent 25
    client.zremrangebyrank('viewed:' + token, 0, -26);
  }
}

update_token(client, token, 'Tom', 'item1');

check_token(client, token);

client.quit();

