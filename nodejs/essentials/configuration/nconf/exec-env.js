var nconf = require('nconf');

nconf.env();

// output Execution Environment value like development, test, production
console.log('\n### output execution environment value like development, test, production');
console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));
