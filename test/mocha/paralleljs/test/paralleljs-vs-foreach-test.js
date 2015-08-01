var Parallel = require('paralleljs');

describe('#parallel vs foreach data driven', function(){
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.forEach(function(data){
        it(data.name, function(){
            console.log(data.name);
        });
    });
    // It does not work because mocha "it" is outside of mocha context
    var pData = new Parallel([{name: 'first'}, {name: 'second'}, {name: 'third'}, {name: 'forth'}]);
    pData.map(function(data){
        it(data.name, function(){
            console.log(data.name);
        });
    });
});
