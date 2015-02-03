var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('<b>home</b>');
});

// 500 error handler will catch the fail below
app.get('/fail', function (req, res) {
    throw new Error('500 server error!');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.send('<b>404</b>');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('<b>500</b>');
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
