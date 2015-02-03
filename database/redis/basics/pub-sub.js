var redis = require('redis');
var subscriber = redis.createClient();
var publisher = redis.createClient();

subscriber.on('subscribe', function(topic, count){
  publisher.publish("event topic", "your event has occured");
});

subscriber.on("message", function(topic, message){
  console.log("message received:: " + topic + ": " + message);
  subscriber.end();
  publisher.end();
});

subscriber.subscribe('event topic');