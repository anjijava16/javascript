var Parallel = require('paralleljs');

var p = new Parallel([1, 2, 3, 4, 5, 6, 7]);

var log = function() {console.log(arguments)};
function foo(n){
    console.log(n);
    return n + 10;
};

p.map(foo).then(log);
