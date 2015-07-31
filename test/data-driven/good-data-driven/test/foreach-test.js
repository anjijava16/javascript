var parallel = require('paralleljs');
describe.only('#GOOD - foreach data driven', function(){
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.forEach(function(data){
        it(data.name, function(){
            console.log(data.name);
        })
    })
    var pData = new parallel([{name: 'first'}, {name: 'second'}, {name: 'third'}, {name: 'forth'}]);
    pData.spawn(function(data){
        it(data.name, function(){
            console.log(data.name);
        })
    })
});
