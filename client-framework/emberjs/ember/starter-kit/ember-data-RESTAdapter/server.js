var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/emberdatapost');

app.use(bodyParser());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var postModel = new Schema({
  id: Number,
  title: String,
  author: String,
  excerpt: String,
  body: String
});

var Post = mongoose.model('Post', postModel);

app.get('/', function (req, res) {
  res.send('hello');
});

// curl -X GET http://localhost:3000/posts
app.get('/posts', function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
    res.json(posts);
  });
});

// curl -X GET http://localhost:3000/posts/1
app.get('/posts/:id', function (req, res) {
  Post.findOne({id: req.params.id}, function (err, post) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
    res.json({ "post": post });
  })
});

// curl -X POST -d "title=Will&author=author-1" http://localhost:3000/posts
app.post('/posts', function (req, res) {
  var post = extendDeep(req.body.post);
  post.id = Number(post.id);

  var p = new Post(post);
  p.save(function (err) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
  });
});

// curl -X PUT -d "title=Rick&author=new-author" http://localhost:3000/posts/1
app.put('/posts/:id', function (req, res) {
  var post = extendDeep(req.body.post);
  post.id = Number(req.params.id);

  Post.update({id: post.id}, post, function (err, num, res) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
  });
});

// curl -X DELETE http://localhost:3000/posts/1
app.delete('/posts/:id', function (req, res) {
  Post.remove({id: Number(req.params.id)}, function (err) {
    if (err) {
      req.statusCode = 404;
      res.end('Error: ' + err);
    }
  });
})

http.createServer(app).listen(3000, function () {
  console.log('app started at port 3000');
});

function extendDeep(parent, child) {
  var i,
    toStr = Object.prototype.toString, astr = "[object Array]";
  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === "object") {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
        extendDeep(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
}
