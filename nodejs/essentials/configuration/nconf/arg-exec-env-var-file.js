var fs    = require('fs'),
    nconf = require('nconf');

//
// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'path/to/config.json'
//
nconf.argv()
    .env()
    .file({ file: 'config/config.json' });

//
// Set a few variables on `nconf`.
//
nconf.set('database:host', '127.0.0.1');
nconf.set('database:port', 5984);

// output arguments value
console.log('### output arguments value');
console.log('foo: ' + nconf.get('foo'));

// output Execution Environment value like development, test, production
console.log('\n### output execution environment value like development, test, production');
console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));

// output variables value
console.log('\n### output variables value');
var database = nconf.get('database');

console.log('database: ' + database);
console.dir(database);

console.log('database.host: ' + database.host);
console.log('database.port: ' + database.port);

// output file value
console.log('\n### output file value');
console.log('ote: ' + nconf.get('ote'));
console.log('ote.server: ' + nconf.get('ote').server);

//
// Save the configuration object to disk
//
nconf.save(function (err) {
    fs.readFile('config/config.json', function (err, data) {
        //console.log(data);
        console.dir(JSON.parse(data.toString()));
    });
});
