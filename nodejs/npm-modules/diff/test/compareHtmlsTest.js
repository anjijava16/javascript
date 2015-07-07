require('colors')
var jsdiff = require('diff');
var assert = require('assert');


function printDiff(one, other){
    var diff = jsdiff.diffChars(one, other);

    diff.forEach(function(part){
        // green for additions, red for deletions
        // grey for common parts
        var color = part.added ? 'green' :
            part.removed ? 'red' : 'grey';
        process.stderr.write(part.value[color]);
    });

    console.log();
}

describe('diff', function() {
    it('1 compare two htmls', function () {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><b>hello</i></body></html>';
        var result = one == other;
        if(!result){
            printDiff(one, other);
        }
        assert(result, "two strings are not equal");
    });
    it('2 compare two htmls', function () {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><b>hello</i></body></html>';
        var result = one == other;
        if(!result){
            printDiff(one, other);
        }
        assert(result, "two strings are not equal");
    });
});
