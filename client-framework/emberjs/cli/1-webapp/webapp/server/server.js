var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');

var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/emberwebapp');

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

var customerModel = new Schema({
  id: String,
  name: String,
  age: String
});

var Customer = mongoose.model('Customer', customerModel);

app.get('/', function (req, res) {
  res.send('hello');
});

// curl -X GET http://localhost:3000/customers
app.get('/customers', function (req, res) {
  Customer.find(function (err, customers) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
    res.json(customers);
  });
});

// curl -X GET http://localhost:3000/customers/1
app.get('/customers/:id', function (req, res) {
  Customer.findOne({id: req.params.id}, function (err, customer) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
    res.json({ "customer": customer });
  })
});

// curl -X POST -d "name=Will&age=101" http://localhost:3000/customers
app.post('/customers', function (req, res) {
  var customer = extendDeep(req.body.customer);
    if(isNaN(customer.id)) {
        customer.id = uuid.v4();
    }

  var c = new Customer(customer);
  c.save(function (err) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
  });
});

// curl -X PUT -d "name=Rick&age=88" http://localhost:3000/customers/1
app.put('/customers/:id', function (req, res) {
  var customer = extendDeep(req.body.customer);

  Customer.update({id: customer.id}, customer, function (err) {
    if (err) {
      res.statusCode = 404;
      res.end('Error: ' + err);
    }
    console.log('updated!');
    res.json(customer);
  });
});

// curl -X DELETE http://localhost:3000/customers/1
app.delete('/customers/:id', function (req, res) {
  Customer.remove({id: req.params.id}, function (err) {
    if (err) {
      req.statusCode = 404;
      res.end('Error: ' + err);
    }
  });
});

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
