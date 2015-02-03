var http = require('http');
var express = require('express');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;
var uuid = require('node-uuid');

function findById(id, fn) {
    var idx = id - 1;
    if (users[idx]) {
        fn(null, users[idx]);
    } else {
        fn(new Error('User ' + id + ' does not exist'));
    }
}

function findByUsername(username, fn) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.username === username) {
            return fn(null, user);
        }
    }
    return fn(null, null);
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    findById(id, function (err, user) {
        done(err, user);
    });
});

// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
    function (username, password, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // Find the user by username.  If there is no user with the given
            // username, or the password is not correct, set the user to `false` to
            // indicate failure and set a flash message.  Otherwise, return the
            // authenticated `user`.
            findByUsername(username, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Unknown user ' + username});
                }
                if (user.password != password) {
                    return done(null, false, {message: 'Invalid password'});
                }
                return done(null, user);
            })
        });
    }
));


var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(logger());
app.use(cookieParser());
app.use(bodyParser());

app.use(session({secret: 'keyboard cat'}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../../public'));
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

var users = [
    {id: 1, username: 'bob', password: 'secret', email: 'bob@example.com'},
    {id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com'}
];




var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/emberwebapp');





var customerModel = new Schema({
  id: String,
  name: String,
  age: String
});

var Customer = mongoose.model('Customer', customerModel);

app.get('/', function (req, res) {
  res.send('hello');
});

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}),
    function (req, res) {
        console.log('##POST /login');
        console.log(req.user);
        res.redirect('/customers');
    });

// curl -X GET http://localhost:3000/customers
app.get('/customers', ensureAuthenticated, function (req, res) {
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
};

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
};

