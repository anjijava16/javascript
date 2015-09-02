function longRun(waitTime, cb){
    setTimeout(function(){
        console.log(waitTime);
        cb();
    }, waitTime);
}

var startTime = Date.now();
console.log("Start Time: " + startTime);
longRun(1000, function(){
   console.log("LongRun task finished");
    var endTime = Date.now();
    console.log("End Time: " + endTime);
    console.log("Total Run Time: " + (endTime - startTime));
});