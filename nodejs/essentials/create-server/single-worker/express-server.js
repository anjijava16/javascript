var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.status(200);
    // set header
    res.set('x-ample', 'trigger');
    res.send('express says hello!');
});

app.listen(8080, function () {
    console.log('app started at port 8080');
});
