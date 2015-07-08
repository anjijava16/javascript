var expect = require('chai').expect;

describe('GOOD - mocha built in err.showDiff', function() {
    it('should compare strings (raw)', function() {
        var err = new Error('bad stuff');
        err.expected = 'a\nb\nc\nd';
        err.actual = 'a\nb\n';
        err.showDiff = true;  // breaks string diffs
        // err.showDiff = false;  // diffs just fine
        throw err;
    });
    it('should compare htmls', function() {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><i>hello</i></body></html>';
        var err = new Error('bad stuff');
        err.expected = one;
        err.actual = other;
        err.showDiff = true;  // breaks string diffs
        // err.showDiff = false;  // diffs just fine
        throw err;
    });
    it('should compare htmls with new line inserted', function() {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><i>hello</i></body></html>';
        var updatedOne = one.replace(/>/g, ">\n");
        var updatedOther = other.replace(/>/g, ">\n");
        var err = new Error('bad stuff');
        err.expected = updatedOne;
        err.actual = updatedOther;
        err.showDiff = true;  // breaks string diffs
        // err.showDiff = false;  // diffs just fine
        throw err;
    });
});
