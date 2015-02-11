var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

redis.print(null, 'sorted sets commands');

// empty database
client.flushdb(redis.print);

client.zadd('zset-key', 728, 'member1', function(error, value){
  console.log('>zadd zset-key 728 member1 <- adds member with the given score to the ZSET');
  if(error) throw error;
  redis.print(error, value);
});

client.zadd('zset-key', 982, 'member0', function(error, value){
  console.log('>zadd zset-key 982 member0');
  if(error) throw error;
  redis.print(error, value);
});

client.zadd('zset-key', 982, 'member0', function(error, value){
  console.log('>zadd zset-key 982 member0');
  if(error) throw error;
  redis.print(error, value);
});

client.zrange('zset-key', 0, -1, 'withscores', function(error, value){
  console.log('>zrange zset-key 0 -1 withscores <- fetches the items in the ZSET from their positions in sorted order');
  if(error) throw error;
  redis.print(error, value);
});

client.zrangebyscore('zset-key', 0, 800, 'withscores', function(error, value){
  console.log('>zrangebyscore zset-key 0 800 withscores <- fetches items in the ZSET based on a range of scores');
  if(error) throw error;
  redis.print(error, value);
});

client.zrem('zset-key', 'member1', function(error, value){
  console.log('>zrem zset-key member1 <- removes the item from the ZSET, if it exists');
  if(error) throw error;
  redis.print(error, value);
});

client.zrem('zset-key', 'member1', function(error, value){
  console.log('>zrem zset-key member1');
  if(error) throw error;
  redis.print(error, value);
});

client.zrange('zset-key', 0, -1, 'withscores', function(error, value){
  console.log('>zrange zset-key 0 -1 withscores');
  if(error) throw error;
  redis.print(error, value);
});

client.quit();
