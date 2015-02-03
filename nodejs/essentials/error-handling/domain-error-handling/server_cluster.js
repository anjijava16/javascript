var cluster = require('cluster');

function startWorker() {
    var worker = cluster.fork();
    console.log('CLUSTER: Worker %d started', worker.id);
}

if (cluster.isMaster) {
    console.log('master cluster');
    console.log(require('os').cpus());
    require('os').cpus().forEach(function () {
        startWorker();
    });

    // log any workers that disconnect; if a worker disconnects, it
    // should then exit, so we'll wait for the exit event to spawn
    // a new worker to replace it
    cluster.on('disconnect', function (worker) {
        console.log('CLUSTER: Worker %d disconnected from the cluster.',
            worker.id);
    });

    // when a worker dies (exits), create a worker to replace it
    cluster.on('exit', function (worker, code, signal) {
        console.log('CLUSTER: Worker %d died with exit code %d (%s)',
            worker.id, code, signal);
        // uncomment code below when it is for production
        //startWorker();
    });

} else {
    console.log('worker cluster');
    // start our app on worker; see server.js
    require('./server.js')();
}
