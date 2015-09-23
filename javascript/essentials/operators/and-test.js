/*
output:
 false && false = false
 false && true = false
 true && false = false
 true && true = true

 */
var x = false;
var y = false;
var result = x && y;
console.log(x + " && " + y + " = " + result);

x = false;
y = true;
result = x && y;
console.log(x + " && " + y + " = " + result);

x = true;
y = false;
result = x && y;
console.log(x + " && " + y + " = " + result);

x = true;
y = true;
result = x && y;
console.log(x + " && " + y + " = " + result);
