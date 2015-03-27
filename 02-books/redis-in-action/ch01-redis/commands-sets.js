var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

redis.print(null, 'sets commands');

// empty database
client.flushdb(redis.print);

client.sadd('set-key', 'item', function(error, value){
  console.log('>sadd set-key item <- adds the item to the set');
  if(error) throw error;
  redis.print(error, value);
});

client.sadd('set-key', 'item2', function(error, value){
  console.log('>sadd set-key item2');
  if(error) throw error;
  redis.print(error, value);
});

client.sadd('set-key', 'item3', function(error, value){
  console.log('>sadd set-key item3');
  if(error) throw error;
  redis.print(error, value);
});

client.sadd('set-key', 'item', function(error, value){
  console.log('>sadd set-key item');
  if(error) throw error;
  redis.print(error, value);
});

client.smembers('set-key', function(error, value){
  console.log('>smembers set-key <- returns the entire set of items');
  if(error) throw error;
  redis.print(error, value);
});

client.sismember('set-key', 'item4', function(error, value){
  console.log('>sismember set-key item4 <- check if an item is in the set');
  if(error) throw error;
  redis.print(error, value);
});

client.sismember('set-key', 'item', function(error, value){
  console.log('>sismember set-key item');
  if(error) throw error;
  redis.print(error, value);
});

client.srem('set-key', 'item2', function(error, value){
  console.log('>srem set-key item2 <- removes the item from the set, if it exists');
  if(error) throw error;
  redis.print(error, value);
});

client.srem('set-key', 'item2', function(error, value){
  console.log('>srem set-key item2 <- removes the item from the set, if it exists');
  if(error) throw error;
  redis.print(error, value);
});

client.smembers('set-key', function(error, value){
  console.log('>smembers set-key');
  if(error) throw error;
  redis.print(error, value);
});

client.quit();

