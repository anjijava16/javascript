var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

console.log('#begin');

var key = 'key1';

client.set(key, 'hello', function (error, value) {
  if (error) throw error;
  console.log('>set key1 hello');
});

client.get(key, function (error, value) {
  if (error) throw error;
  console.log('>get key1');
});

client.quit();

console.log('#end');

