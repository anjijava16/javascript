var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser('S3CRE7'));

app.get('/', function (req, res) {
    console.log("Cookies: ", req.cookies);
    res.send(req.cookies);
});

app.get('/counter', function (req, res) {
    // output client side signed-cookie
    console.log(req.signedCookies);
    if(req.signedCookies){
        console.log('signedCookies.count: ', req.signedCookies.count);
    }

    var count = req.signedCookies.count || 0;
    count++;

    // create signed-cookie for client
    res.cookie('count', count, { signed: true });
    console.log('Count: ' + count);
    res.send('Count: ' + count);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
