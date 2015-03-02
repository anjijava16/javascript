function find(name, cb) {
  // simulate long run - get data from database
  // return person object to callback person parameter
  setTimeout(function () {
    cb(null, {name: name});
  }, 500);
}

var MYAPP = MYAPP || {};

MYAPP.problem = function() {
  var names = ['Tom', 'Dick', 'Harry'];
  var len = names.length;
  for (var i = 0; i < len; i++) {
    var name = names[i];
    find(name, function (err, person) {
      console.log('#problem - find', name);  // print Harry all the time
      console.log('person.name', person.name);
    });
  }
};

MYAPP.problem();

MYAPP.solution = function() {
  var names = ['Tom', 'Dick', 'Harry'];
  var len = names.length;
  for (var i = 0; i < len; i++) {
    var name = names[i];
    (function findName(name){
      find(name, function (err, person) {
        console.log('#solution - find', name);
        console.log('person.name', person.name);
      });
    })(name);
  }
};

MYAPP.solution();
