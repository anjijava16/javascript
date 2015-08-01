var Parallel = require('paralleljs');
describe('#GOOD - foreach data driven', function(){
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.forEach(function(data){
        it(data.name, function(){
            console.log(data.name);
        });
    });
});
