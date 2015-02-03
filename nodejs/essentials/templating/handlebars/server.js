var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
        res.render('home', {templateType: 'handlebars'});
});

app.listen(3000, function () {
    console.log("App Started on PORT 3000");
});
