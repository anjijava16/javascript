var assert = require('chai').assert;

describe('mocha chai assert example', function() {
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
