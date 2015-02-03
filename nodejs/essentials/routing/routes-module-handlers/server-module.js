var express = require('express');
var app = express();

// add routes
require('./module/routes.js')(app);

app.listen(3000, function () {
    console.log('app started at port 3000');
});
