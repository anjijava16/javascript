var express = require('express');
var bodyParser = require('body-parser');

app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var ARTICLES = [
    { id: 1, title: 'title 1', author: 'author 1', body: 'body 1' },
    { id: 2, title: 'title 2', author: 'author 2', body: 'body 2' },
    { id: 3, title: 'title 3', author: 'author 3', body: 'body 3' }
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
        res.send(401, {error: 'Invalid token. You provide ' + userToken});
        return false;
    }

    return true;
};

app.get('/articles.json', function(req, res){
    if(validTokenProvided(req, res)){
        res.send(ARTICLES);
    }
});

app.get('/about', function(req, res){
    var tom = {name: 'Tom', age: 10};
    res.render('about', {user: tom});
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('app started at port 3000');
});
