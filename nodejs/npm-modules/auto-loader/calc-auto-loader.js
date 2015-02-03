var app = require('auto-loader').load(__dirname +'/math');
console.log(app);

console.log(app.add(1, 2));
console.log(app.subtract(8, 1));
