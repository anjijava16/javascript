var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

console.log('#begin');

redis.print(null, 'strings commands');

// empty database
client.flushdb(redis.print);

client.set('hello', 'world', function(error, value){
  console.log('>set hello world');
  if(error) throw error;
  redis.print(error, value);
});

client.get('hello', function(error, value){
  console.log('>get hello');
  if(error) throw error;
  redis.print(error, value);
});

client.del('hello', function(error, value){
  console.log('>del hello');
  if(error) throw error;
  redis.print(error, value);
});

client.get('hello', function(error, value){
  console.log('>get hello');
  if(error) throw error;
  redis.print(error, value);
});

client.quit();

console.log('#end');
