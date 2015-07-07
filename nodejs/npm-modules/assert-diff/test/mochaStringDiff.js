var expect = require('chai').expect;

describe('diff', function() {
    it('should compare strings (raw)', function() {
        var err = new Error('bad stuff');
        err.expected = 'a\nb\nc\nd';
        err.actual = 'a\nb\n';
        err.showDiff = true;  // breaks string diffs
        // err.showDiff = false;  // diffs just fine
        throw err;
    });
    it('should compare htmls (raw)', function() {
        var one = '<html>\n<body>\n<b>hello</b>\n</body></html>';
        var other = '<html>\n<body>\n<i>hello</i>\n</body></html>';
        var err = new Error('bad stuff');
        err.expected = one;
        err.actual = other;
        err.showDiff = true;  // breaks string diffs
        // err.showDiff = false;  // diffs just fine
        throw err;
    });
});
