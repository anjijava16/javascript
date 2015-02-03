var nconf = require('nconf');

nconf.argv()
    .env();

// output arguments value
console.log('### output arguments value');
console.log('foo: ' + nconf.get('foo'));

// output Execution Environment value like development, test, production
console.log('\n### output execution environment value like development, test, production');
console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));
