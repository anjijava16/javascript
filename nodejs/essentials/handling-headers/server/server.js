var http = require('http');

var server = http.createServer(function(req, res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,X-Shopper-Id,X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    if(req.headers){
        console.log('\n### request headers\n', req.headers);
    }
    res.end('end');
});

server.listen(3000, function(){
    console.log('app started at port 3000');
});
