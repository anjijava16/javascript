var express = require('express');
var app = new express();

// to enable POST data handling, load bodyParser middleware
var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());

app.get('/get-request', function (req, res) {
    var responseContent = {};
    res.status(200).send(responseContent);
});
app.post('/post-request', function(req, res){
    console.log('Server POST: ' + req.body.name);
    setTimeout(function () {
        res.send('POST: ' + req.body.name);
    }, 5000);
});
app.put('/put-request', function(req, res){
    console.log('PUT: ' + req.body.name);
    res.send('PUT: ' + req.body.name);
});
app.delete('/delete-request', function(req, res){
    console.log('DELETE: ' + req.body.name);
    res.send('DELETE: ' + req.body.name);
});
app.get('/fail', function (req, res) {
    res.status(500).send({result: 'fail'});
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});
