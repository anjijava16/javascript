require('colors');
var jsdiff = require('diff');
var assert = require('assert');

function printDiff(one, other){
    var ret = "";
    var diff = jsdiff.diffChars(one, other);

    diff.forEach(function(part){
        // green for additions, red for deletions
        // grey for common parts
        var color = part.added ? 'green' :
            part.removed ? 'red' : 'grey';
        //process.stderr.write(part.value[color]);
        ret += part.value[color];
    });

    //console.log();
    return ret;
}

describe('diff - use throw new Error() to log diff', function() {
    it('1 compare two htmls', function () {
        var one = '<html><body><b>hello</b></body></html>';
        var other = '<html><body><i>hello</i></body></html>';
        var result = one == other;
        if(!result){
            throw new Error(printDiff(one, other));
        }
    });
    it('2 compare two htmls', function () {
        var one = '<html><body><b>hello</b></body></html>'.replace(/>/g, ">\n");
        var other = '<html><body><i>hello</i></body></html>'.replace(/>/g, ">\n");
        var result = one == other;
        if(!result){
            throw new Error(printDiff(one, other));
        }
    });
});
