Route Handlers Are Middleware
=====================================

## Installation

> `npm install`

## Running / Development

**server.js**

```
function authorize(req, res, next){
    if(req.session.authorized) return next();
    res.render('home');
}

app.get('/secret', authorize, function (req, res) {
    if (req.session.email) {
        res.write('<h1>Hello ' + req.session.email + '</h1>');
        res.end('<a href="logout">Logout</a>');
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href="logout">Login</a>');
    }
});
```

> Launch server `node server.js`

> Create cookie: visit http://localhost:3000, cookie.Name is connect.sid at developer tool, Resources, Cookies, localhost

> Create sessions for user: enter email, password (1234), click submit, redirect to http://localhost:3000/admin

> Destroy sessions for user: click Logout at http://localhost:3000/admin. Will redirect to /login if try to visit http://localhost:3000/admin without login

