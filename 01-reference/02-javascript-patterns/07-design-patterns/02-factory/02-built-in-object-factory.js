var o = new Object();
var n = new Object(1);
var s = Object('1');
var b = Object(true);

// test
console.log(o.constructor);
console.log(n.constructor);
console.log(s.constructor);
console.log(b.constructor);
