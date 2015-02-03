var express = require('express');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/search', function(req, res){
    res.render('search', {title: 'Search!'});
});

app.get('/search-result', function (req, res) {
    var name = req.query.name;
    var source = req.query.source;
    console.log('Search for: ' + name);
    console.log('Form: ' + source);
    res.send(name + ' : ' + source);
});

app.listen(3000, function () {
    console.log('app started at port 3000');
});

