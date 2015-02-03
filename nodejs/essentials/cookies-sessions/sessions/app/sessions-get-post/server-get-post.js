var express = require('express');
var bodyParser = require('body-parser'); // for reading POSTed form data into 'req.body'
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

var app = express();

// must use cookieParser before expressionSession
app.use(cookieParser());

app.use(expressSession({secret: 'somesecrettokenhere', cookie: {maxAge: 5000}}));

app.use(bodyParser());

app.get('/', function(req, res){
    var html = '<form action="/" method="post">' +
        'Your name: <input type="text" name="userName"><br>' +
        '<button type="submit">Submit</button>' +
        '</form>';
    if(req.session.userName){
        html += '<br>Your username from your session is: ' + req.session.userName;
        html += '<br>expires in: ' + req.session.cookie.maxAge / 1000;
    }
    res.send(html);
});

app.post('/', function(req, res){
    req.session.userName = req.body.userName;
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

