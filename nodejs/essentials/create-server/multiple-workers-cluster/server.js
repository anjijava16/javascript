var http = require('http');
var express = require('express');

var app = express();

// use domains for better error handling
app.use(function (req, res, next) {
    // create a domain for this request
    var domain = require('domain').create();
    // handle errors on this domain
    domain.on('error', function (err) {
        console.error('DOMAIN ERROR CAUGHT\n', err.stack);
        try {
            // failsafe shutdown in 1 seconds
            setTimeout(function () {
                console.error('Failsafe shutdown.');
                process.exit(1);
            }, 1000);

            // disconnect from the cluster
            var worker = require('cluster').worker;
            if (worker) worker.disconnect();

            // stop taking new requests
            server.close();

            try {
                // attempt to use Express error route
                next(err);
            } catch (error) {
                // if Express error route failed, try
                // plain Node response
                console.error('Express error mechanism failed.\n', error.stack);
                res.statusCode = 500;
                res.setHeader('content-type', 'text/plain');
                res.end('Server error.');
            }
        } catch (error) {
            console.error('Unable to send 500 response.\n', error.stack);
        }
    });

    // add the request and response objects to the domain
    domain.add(req);
    domain.add(res);

    // execute the rest of the request chain in the domain
    domain.run(next);
});

app.use(function (req, res, next) {
    console.log('### cluster info');
    var cluster = require('cluster');
    if (cluster.isWorker) {
        console.log('Worker %d received request', cluster.worker.id);
    }
    next();
});

app.get('/', function(req, res) {
    res.send('<b>home</b>');
});

app.get('/about', function(req,res){
    res.send('<b>about</b>');
});

// 500 error handler will catch the fail below
app.get('/fail', function (req, res) {
    throw new Error('500 server error!');
});

// need domain to catch the uncaught exception below
app.get('/epic-fail', function (req, res) {
    // simulate long run failure by using nextTick
    process.nextTick(function () {
        throw new Error('Server uncaught exception!');
    });
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

var server;

function startServer() {
    server = http.createServer(app).listen(3000, function () {
        console.log('Express started in ' + app.get('env') +
        ' mode on http://localhost:' + 3000 +
        '; press Ctrl-C to terminate.');
    });
}

if (require.main === module) {
    // application run directly; start app server
    startServer();
} else {
    // application imported as a module via "require": export function to create server
    module.exports = startServer;
}
