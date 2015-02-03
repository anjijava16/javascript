var data = require('./awesome.data.json');

console.log('#loaded json data:', data);
console.log('#process.env.NODE_ENV: ', process.env.NODE_ENV);
console.log('#data[process.env.NODE_ENV]: ', data[process.env.NODE_ENV]);
console.log('#data[process.env.NODE_ENV].servers: ', data[process.env.NODE_ENV].servers);
