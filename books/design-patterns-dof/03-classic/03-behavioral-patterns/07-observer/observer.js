// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      console.log(log);
      log = "";
    }
  }
})();

function Click(){
  this.handlers = [];   // observers
}

Click.prototype = {
  subscribe: function(fn){
    this.handlers.push(fn);
  },
  unsubscribe: function(fn){
    this.handlers = this.handlers.filter(
      function(item){
        if(item != fn){
          return item;
        }
      }
    )
  },
  fire: function(msg, thisObj){
    console.log(msg);
    console.log(thisObj);
    this.handlers.forEach(function(item){
      item.call(thisObj, msg);
    });
  }
};

(function run(){
  var clickHandler = function(msg){
    log.add("fired: " + msg);
  };
  var button = {
    content: "Button"
  };
  var click = new Click();
  click.subscribe(clickHandler);
  click.fire("event #1", button);

  click.unsubscribe(clickHandler);
  click.fire("event #2", button);

  click.subscribe(clickHandler);
  click.fire("event #3", button);

  log.show();
})();
