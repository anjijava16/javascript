var publisher = {
  subscribers: {
    any: [] // event type: subscribers
  },
  subscribe: function(fn, type){
    type = type || 'any';
    if(typeof this.subscribers[type] === "undefined"){
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsubscribe: function(fn, type){
    this.visitSubscribes('unsubscribe', fn, type);
  },
  publish: function(publication, type){
    this.visitSubscribes('publish', publication, type);
  },
  visitSubscribes: function(action, arg, type){
    var pubtype = type || 'any';
    var subscribers = this.subscribers[pubtype];
    var max = subscribers.length;
    for(var i = 0; i < max; i++){
      if(action === 'publish'){
        subscribers[i](arg);
      }
      else{
        // unsubscribe
        if(subscribers[i] === arg){
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

function makePublisher(o){
  for(var i in publisher){
    if(publisher.hasOwnProperty(i) && typeof publisher[i] === "function"){
      o[i] = publisher[i];
    }
  }
  o.subscribers = {any: []};
}

//# paper publisher, joe subscriber
var paper = {
  daily: function(){
    this.publish("big news today");
  },
  monthly: function(){
    this.publish("interesting analysis", "monthly");
  }
};

makePublisher(paper);

var joe = {
  drinkCoffee: function(paper){
    console.log('Just read ' + paper);
  },
  sundayPreNap: function(monthly){
    console.log('About to fall asleep reading this ' + monthly);
  }
};

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();

//# joe publisher, paper subscriber
joe.tweet = function(msg){
  this.publish(msg);
};

makePublisher(joe);

paper.readTweets = function(tweet){
  console.log('Call big meeting! Someone ' + tweet);
};
joe.subscribe(paper.readTweets);

joe.tweet("hated the paper today");
