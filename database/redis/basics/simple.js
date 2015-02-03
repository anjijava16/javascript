var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(error){
  console.log('Error while creating the Socket Connection');
});

client.set('vege', 'Onion', redis.print);

client.get('vege', function(error, value){
  if(error) throw error;
  console.log('The vegetable is ' + value);
});

client.quit();
