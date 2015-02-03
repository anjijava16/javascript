var uuid = require('node-uuid');

// Generate a v1 (time-based) id
var v1 = uuid.v1();
console.log(v1);

// Generate a v4 (random) id
var v4 = uuid.v4();
console.log(v4);
