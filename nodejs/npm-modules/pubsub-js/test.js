var PubSub = require('pubsub-js');

// create a function to subscribe to topies
var mySubscriber = function(msg, data){
  console.log(msg, data);
};

var myTopic = 'MY TOPIC';

// add the function to the list of subscribers for a particular topic
// we're keeping the returned token, in order to be able to unsubscribe
// from the topic later on
var token = PubSub.subscribe(myTopic, mySubscriber);

// publish a topic asyncronously
PubSub.publish(myTopic, 'hello world async!');

// publish a topic syncronously, which is faster in some environments,
// but will get confusing when one topic triggers new topics in the
// same execution chain
PubSub.publishSync(myTopic, 'hello world sync!');

// unsubscribe this subscriber from this topic
//PubSub.unsubscribe(token);
