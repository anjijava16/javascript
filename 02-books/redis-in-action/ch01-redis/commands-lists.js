var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

redis.print(null, 'lists commands');

// empty database
client.flushdb(function(error, didSucceed){
  console.log('>flushdb <- empty database');
  console.log(didSucceed);
});

client.rpush('list-key', 'item', function(error, value){
  console.log('>rpush list-key item');
  if(error) throw error;
  redis.print(error, value);
});

client.rpush('list-key', 'item2', function(error, value){
  console.log('>rpush list-key item2');
  if(error) throw error;
  redis.print(error, value);
});

client.rpush('list-key', 'item', function(error, value){
  console.log('>rpush list-key item');
  if(error) throw error;
  redis.print(error, value);
});

client.lrange('list-key', 0, -1, function(error, value){
  console.log('>lrange list-key 0 -1');
  if(error) throw error;
  console.log(value);
});

client.lindex('list-key', 1, function(error, value){
  console.log('>lindex list-key 1');
  if(error) throw error;
  console.log(value);
});

client.lpop('list-key', function(error, value){
  console.log('>lpop list-key');
  if(error) throw error;
  console.log(value);
});

client.lrange('list-key', 0, -1, function(error, value){
  console.log('>lrange list-key 0 -1');
  if(error) throw error;
  console.log(value);
});

client.quit();

