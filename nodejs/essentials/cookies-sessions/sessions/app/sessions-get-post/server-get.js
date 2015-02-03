var express = require('express');
var session = require('express-session');

var app = express();

// session will expire in 2 seconds
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 20000 }}));

app.get('/', function (req, res) {
    // create session for server
    console.log('session=' + req.session);
    console.log('session.secret=' + req.session.secret);
    console.log('session.cookie.maxAge=' + req.session.cookie.maxAge);

    if (req.session.views) {
        // server side: update session.views
        req.session.views++;
        res.setHeader('Content-Type', 'text/html');
        // client-side, send session.views data to client
        res.write('<p>views: ' + req.session.views + '</p>');
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
        res.end();
    } else {
        // server side, store data in session.views
        req.session.views = 1;
        res.end('welcome to the session demo. refresh!')
    }
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
