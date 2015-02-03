var assert = require('assert');
var nconf = require('nconf');

// file({ file: 'config/config.json' }) is absolute path
nconf.env()
    .file({ file: 'config/config.json' });

var execEnv = nconf.get('NODE_ENV');
console.log(execEnv);
var conf = nconf.get(execEnv);
console.dir(conf);

describe('mocha nconf assert example', function() {
    it('verify conf file json property', function() {
        assert.equal(conf.protocol, 'https', 'conf.protocol is not "https"');
    });

    it('should do a synchronous test', function() {
        assert.ok(true);
    });

    it('should do an asynchronous test', function(done) {
        setTimeout(function() {
            assert.ok(true);
            done();
        }, 15);
    });
});
