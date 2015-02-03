var http = require('http');
var express = require('express');

var app = express();

// logging
switch(app.get('env')){
    case 'development':
        // compact, colorful dev logging
        app.use(require('morgan')('dev'));
        break;
    case 'production':
        // module 'express-logger' supports daily log rotation
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
    break;
}

app.get('/', function (req, res) {
    console.log(require.main === module);
    // send string
    res.send('index');
});

http.createServer(app).listen(3000, function () {
    console.log('app started in ' + app.get('env') +
    ' at port 3000');
});
