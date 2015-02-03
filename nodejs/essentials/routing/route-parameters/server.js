var express = require('express');

var app = express();

app.get('/', function (req, res) {
    // send string
    res.send('index');
});

var staff = {
    mitch: { bio: 'Mitch is the man to have at your back in a bar fight.' },
    madeline: { bio: 'Madeline is our Oregon expert.' },
    walt: { bio: 'Walt is our Oregon Coast expert.' }
};

app.get('/staff/:name', function(req, res) {
    var info = staff[req.params.name];
    if(!info) return next();  // will eventually fall through to 404
    res.send('staffer', info);
});

var workers = {
    portland: {
        mitch: { bio: 'Mitch is the man to have at your back.' },
        madeline: { bio: 'Madeline is our Oregon expert.' }
    },
    bend: {
        walt: { bio: 'Walt is our Oregon Coast expert.' }
    }
};

app.get('/workers/:city/:name', function(req, res){
    var info = workers[req.params.city][req.params.name];
    if(!info) return next();  // will eventually fall through to 404
    res.send('worker', info);
})

app.listen(3000, function () {
    console.log('app started at port 3000');
});

