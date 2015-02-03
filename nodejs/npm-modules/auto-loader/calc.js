var add = require('./math/add.js');
var subtract = require('./math/subtract.js');
var operation = require('./math/operation.js');
var multiply = operation.multiply;
var divide = operation.divide;

// one exports per file: module.exports
console.log(add(1, 2));
console.log(subtract(8, 1));

// multiple exports per file: exports.multiply and exports.divide
console.log(multiply(2, 3));
console.log(divide(9, 3));
