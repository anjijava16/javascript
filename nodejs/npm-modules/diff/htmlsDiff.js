require('colors')
var jsdiff = require('diff');

var one = '<html><body><b>hello</b></body></html>';
var other = '<html><body><i>hello</i></body></html>';

var diff = jsdiff.diffChars(one, other);

diff.forEach(function(part){
    // green for additions, red for deletions
    // grey for common parts
    var color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
    process.stderr.write(part.value[color]);
});

console.log();
