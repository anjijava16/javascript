var nconf = require('nconf');

nconf.env()
    .file({ file: 'config/config.json' });

// output Execution Environment value like development, test, production
console.log('\n### output execution environment value like development, test, production');
console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));

// output config file value
console.log('\n### output config file value');
console.log('ote: ' + nconf.get('ote'));
console.log('ote.server: ' + nconf.get('ote').server);
