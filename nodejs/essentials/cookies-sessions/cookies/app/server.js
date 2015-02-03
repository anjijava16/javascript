var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log("Cookies: ", req.cookies);
    res.send(req.cookies);
});

app.get('/createcookie', function(req, res){
    res.cookie('name', 'Tom');
    res.send('cookie created');
});

app.get('/counter', function (req, res) {
    // Read cookies: req.cookies.count
    console.log(req.cookies.count);
    var count = req.cookies.count || 0;

    if(count == 3){
        // delete cookie
        console.log('delete cookie');
        res.clearCookie('count');
        count = 0;
    }

    count++;
    // Create/Update cookies
    res.cookie('count', count);
    res.send('Count: ' + count);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
