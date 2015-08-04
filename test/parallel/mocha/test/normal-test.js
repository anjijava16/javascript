describe('foreach data driven', function(){
    var count = 1;
    var testData = [{name: 'Tom'}, {name: 'Ken'}, {name: 'Will'}, {name: 'Harry'}];
    testData.map(function(data){
        it(data.name, function(done){
            console.log(count++);

            setTimeout(function () {
                console.log("timeout: " + data.name);
                //assert.ok(false);
                done();
            }, 1000);
        });
    });
});
