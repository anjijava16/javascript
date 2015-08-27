describe('#GOOD - string array data driven', function(){
    var testData = ["Tom", "Dick", "Harry"];
    testData.forEach(function(data){
        it("test " + data, function(){
            console.log(data);
        });
    });
});
