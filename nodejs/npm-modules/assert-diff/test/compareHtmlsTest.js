var assert = require('assert-diff');

// show diff line by line
describe('assert-diff', function() {
    it('1 compare two htmls', function () {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><i>hello</i></body></html>';
        assert.deepEqual(one, other, "two strings are not equal");
    });
    it('BAD because new line does not break one line into multiple lines', function () {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><i>hello</i></body></html>';
        var updatedOne = one.replace(/>/g, ">\n");  // add new line at the end of tag to show better diff
        var updatedOther = other.replace(/>/g, ">\n");
        console.log("#updatedOne");
        console.log(updatedOne);
        assert.deepEqual(updatedOne, updatedOther, "two strings are not equal");
    });
});
