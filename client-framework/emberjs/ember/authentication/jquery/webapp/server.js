var express = require('express');
var bodyParser = require('body-parser');
app = express();
app.use(bodyParser());

var ARTICLES = [
    {
        id: 1,
        title: 'How to write a JavaScript Framework',
        author: 'Tomhuda Katzdale',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        title: 'Chronicles of an Embereño',
        author: 'Alerik Bryneer',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        title: 'The Eyes of Thomas',
        author: 'Yehuda Katz',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

var PHOTOS = [
    { id: 1, src: "/images/potd.png" },
    { id: 2, src: "/images/yohuda.jpg" },
    { id: 3, src: "/images/easter.jpg" }
];

var currentToken;
app.post('/auth.json', function(req, res){
    var body = req.body;
    var username = body.username;
    var password = body.password;

    if(username == 'ember' && password == 'casts'){
        // Generate and save the token
        currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        res.send({
            success: true,
            token: currentToken
        });
    }
    else{
        res.send({
            success: false,
            message: 'Invalid username/password'
        });
    }
});

function validTokenProvided(req, res){
    // Check POST, GET, and headers for supplied token.
    var userToken = req.body.token || req.param('token') || req.headers.token;

    if(!currentToken || userToken != currentToken){
        res.send(401, {error: 'Invalid token. You provide: ' + userToken});
        return false;
    }

    return true;
}

app.get('/articles.json', function(req, res){
    if(validTokenProvided(req, res)){
        res.send(ARTICLES);
    }
});

app.get('/photos.json', function(req, res){
    if(validTokenProvided(req, res)){
        res.send(PHOTOS);
    }
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('app started at port 3000');
});
