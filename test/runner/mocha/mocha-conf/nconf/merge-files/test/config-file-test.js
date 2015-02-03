var nconf = require('nconf');

var nodeEnv = process.env.NODE_ENV;
console.log('NODE_ENV: ' + nodeEnv);

// merge config files
nconf.file('config/config.json')
    .file('env', 'config/config.' + nodeEnv + '.json');

// get property from common config.json
console.log('protocol:' + nconf.get('protocol'));

// get property from custom config.json
console.log('username: ' + nconf.get('username'));

