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

var Patterns = {
  namespace: function (name) {
    var parts = name.split(".");
    var ns = this;

    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }

    return ns;
  }
};

Patterns.namespace("Classic").Mediator = (function () {
  var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
  };

  Participant.prototype = {
    send: function (message, to) {
      this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
      log.add(from.name + " to " + this.name + ": " + message);
    }
  };

  var Chatroom = function () {
    var participants = {};
    return {
      register: function (name) {
        var participant = new Participant(name);
        participants[participant.name] = participant;
        participant.chatroom = this;

        return participant;
      },
      send: function (message, from, to) {
        if (to) {                       // single message
          to.receive(message, from);
        } else {                        // broadcast message
          for (key in participants) {
            if (participants[key] !== from) {
              participants[key].receive(message, from);
            }
          }
        }
      }
    };
  };

  return {
    Chatroom: Chatroom
  }
})();

(function run() {
  var chatroom = new Patterns.Classic.Mediator.Chatroom();

  var yoko = chatroom.register("Yoko");
  var john = chatroom.register("John");
  var paul = chatroom.register("Paul");
  var ringo = chatroom.register("Ringo");

  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);

  log.show();
})();
