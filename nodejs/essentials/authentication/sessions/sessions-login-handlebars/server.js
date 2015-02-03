var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    if (req.session.email) {
        res.redirect('/admin');
    }
    else {
        res.render('home');
    }
});

app.post('/login', function (req, res) {
    req.session.email = req.body.email;
    res.redirect('/admin');
});

app.get('/admin', function (req, res) {
    if (req.session.email) {
        res.write('<h1>Hello ' + req.session.email + '</h1>');
        res.end('<a href="logout">Logout</a>');
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href="logout">Login</a>');
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

app.listen(3000, function () {
    console.log("App Started on PORT 3000");
});
