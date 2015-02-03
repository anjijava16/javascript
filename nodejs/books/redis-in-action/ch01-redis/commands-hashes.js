var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

redis.print(null, 'hashes commands');

// empty database
client.flushdb(redis.print);

client.hset('hash-key', 'sub-key1', 'value1', function(error, value){
  console.log('>hset hash-key sub-key1 value1 <- stores the value at the key in the hash');
  if(error) throw error;
  redis.print(error, value);
});

client.hset('hash-key', 'sub-key2', 'value2', function(error, value){
  console.log('>hset hash-key sub-key2 value2');
  if(error) throw error;
  redis.print(error, value);
});

client.hset('hash-key', 'sub-key1', 'value11', function(error, value){
  console.log('>hset hash-key sub-key1 value11');
  if(error) throw error;
  redis.print(error, value);
});

client.hgetall('hash-key', function(error, value){
  console.log('>hgetall hash-key <- fetches the entire has');
  if(error) throw error;
  redis.print(error, value);
  console.log(value);
});

client.hdel('hash-key', 'sub-key2', function(error, value){
  console.log('>hdel hash-key sub-key2 <- removes a key from the hash, if it exists');
  if(error) throw error;
  redis.print(error, value);
});

client.hdel('hash-key', 'sub-key2', function(error, value){
  console.log('>hdel hash-key sub-key2');
  if(error) throw error;
  redis.print(error, value);
});

client.hget('hash-key', 'sub-key1', function(error, value){
  console.log('>hgel hash-key sub-key1 <- fetches the value at the given hash key');
  if(error) throw error;
  redis.print(error, value);
});

client.hgetall('hash-key', function(error, value){
  console.log('>hgetall hash-key');
  if(error) throw error;
  redis.print(error, value);
  console.log(value);
});

client.quit();
