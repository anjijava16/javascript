var express = require('express');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/search-result', function (req, res) {
    var q = req.query.q;
    var l = req.query.l;
    var e = req.query.e;
    console.log('Query: ' + q);
    console.log('Location: ' + l);
    console.log('Experience: ' + e);
    res.json(req.query);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

