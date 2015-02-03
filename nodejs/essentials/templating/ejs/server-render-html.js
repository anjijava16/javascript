var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
        res.render('index.html', {templateType: 'ejs'});
});

app.listen(3000, function () {
    console.log("App Started on PORT 3000");
});
