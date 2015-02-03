console.log('#begin');

// reusable methods
function method1(delay, cb) {
  // simulate long run
  setTimeout(function () {
    console.log('before method1() invoke callback');
    cb(null, {name: 'Tom'});
  }, delay);
}

function method2(delay, cb) {
  // simulate long run
  setTimeout(function () {
    console.log('before method2() invoke callback');
    cb(null, {name: 'Tom'});
  }, delay);
}

//=======================================

// client code

method1(800, function (err, person) {
  console.log('callback is invoked by method1()');
  console.log(person.name);
});

method2(500, function (err, person) {
  console.log('callback is invoked by method2()');
  console.log(person.name);
});

console.log('#end');
