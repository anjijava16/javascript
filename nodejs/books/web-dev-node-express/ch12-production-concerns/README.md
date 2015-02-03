ch12 Production Concerns
=========================

## Installation

* `npm install`

## Running / Development

### Execution Environments

**development**

* `node server-env.js`, console output: `app started in development at port 3000`

**production**

```
$ export NODE_ENV=production
$ node server-env.js
app started in production at port 3000
```

**test**

```
$ export NODE_ENV=test
$ node server-env.js
app started in test at port 3000
```

### Scaling Out with App Clusters

server.js

```
var http = require('http');

app.use(function (req, res, next) {
    console.log('### cluster info');
    var cluster = require('cluster');
    if (cluster.isWorker) {
        console.log('Worker %d received request', cluster.worker.id);
    }
    next();
});

var server;

function startServer() {
    server = http.createServer(app).listen(app.get('port'), function(){
        console.log( 'Express started in ' + app.get('env') +
        ' mode on http://localhost:' + app.get('port') +
        '; press Ctrl-C to terminate.' );
    });
}

if(require.main === module){
    // application run directly; start app server
    startServer();
} else {
    // application imported as a module via "require": export function to create server
    module.exports = startServer;
}
```

server_cluster.js

```
var cluster = require('cluster');

function startWorker() {
    var worker = cluster.fork();
    console.log('CLUSTER: Worker %d started', worker.id);
}

if(cluster.isMaster){

    console.log('master cluster');
    console.log(require('os').cpus());
    require('os').cpus().forEach(function(){
        startWorker();
    });

    // log any workers that disconnect; if a worker disconnects, it
    // should then exit, so we'll wait for the exit event to spawn
    // a new worker to replace it
    cluster.on('disconnect', function(worker){
        console.log('CLUSTER: Worker %d disconnected from the cluster.',
            worker.id);
    });

    // when a worker dies (exits), create a worker to replace it
    cluster.on('exit', function(worker, code, signal){
        console.log('CLUSTER: Worker %d died with exit code %d (%s)',
            worker.id, code, signal);
        startWorker();
    });

} else {

    console.log('worker cluster');
    // start our app on worker; see server.js
    require('./server.js')();

}
```

* `node server_cluster.js`

### Handling Uncaught Exceptions - need domain to catch the error

server.js

```
// use domains for better error handling
app.use(function (req, res, next) {
    // create a domain for this request
    var domain = require('domain').create();
    // handle errors on this domain
    domain.on('error', function (err) {
        console.error('DOMAIN ERROR CAUGHT\n', err.stack);
        try {
            // failsafe shutdown in 5 seconds
            setTimeout(function () {
                console.error('Failsafe shutdown.');
                process.exit(1);
            }, 500);

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

// need domain to catch the uncaught exception below
app.get('/epic-fail', function (req, res) {
    // simulate long run failure by using nextTick
    process.nextTick(function () {
        throw new Error('Server uncaught exception!');
    });
});
```

* `node server_cluster.js`
