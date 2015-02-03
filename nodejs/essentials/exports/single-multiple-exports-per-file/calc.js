var add = require('./math/add.js');
var subtract = require('./math/subtract.js');
var operations = require('./math/operations.js');
var multiply = operations.multiply;
var divide = operations.divide;

// one exports per file: module.exports
console.log(add(1, 2));
console.log(subtract(8, 1));

// multiple exports per file: exports.multiply and exports.divide
console.log(multiply(2, 3));
console.log(divide(9, 3));
