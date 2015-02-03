var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var people = [
    { name: 'Tom', age: 10.00 },
    { name: 'Dick', age: 20.00 },
    { name: 'Harry', age: 30.00 }
];
app.get('/', function(req, res){
    res.send('hello');
});
// curl -X GET http://localhost:3000/people
app.get('/people', function(req, res){
    res.json(people);
});
// curl -X GET http://localhost:3000/people/1
app.get('/people/:id', function(req, res){
    if(req.params.id > (people.length - 1) || req.params.id < 0){
        res.statusCode = 404;
        res.end('Not Found');
    }
    res.json(people[req.params.id]);
});
// curl -X POST -d "name=Will&age=18" http://localhost:3000/people
app.post('/people', function(req, res) {
    if (typeof req.body.name === 'undefined') {
        res.statusCode = 400;
        res.end('a product name is required');
    }
    var newObj = extendDeep(req.body);
    newObj.age = Number(newObj.age);
    people.push(newObj);
    res.send(newObj);
});
// curl -X PUT -d "name=Rick&age=68" http://localhost:3000/people/1
app.put('/people/:id', function(req, res){
    if(req.params.id > (people.length - 1) || req.params.id < 0){
        res.statusCode = 404;
        res.end('No product found for that ID');
    }
    var newObj = extendDeep(req.body);
    newObj.age = Number(newObj.age);
    people[req.params.id] = newObj;
    res.send(newObj);
});
// curl -X DELETE http://localhost:3000/people/1
app.delete('/people/:id', function(req, res){
    if(req.params.id > (people.length - 1) || req.params.id < 0){
        req.statusCode = 404;
        res.end('No product found for that ID');
    }
    people.splice(req.params.id, 1);
    res.json(people);
})
http.createServer(app).listen(3000, function(){
    console.log('app started at port 3000');
});
function extendDeep(parent, child) {
    var i,
        toStr = Object.prototype.toString, astr = "[object Array]";
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === "object") {
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {}; extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i]; }
        } }
    return child;
}
