ch01 express
===========

## Installation

> `npm install`

## Running / Development

> Launch server `node app.js`


### redis

#### monitor redis

> `redis-cli monitor`  <- monitor redis localhost real time, run command below

#### view session data in redis

> add signed cookie `app.use(cookieParser('my secret'));` and then assign redis store to session store

```
app.use(session({
  secret: 'my secret',
  saveUninitialized: true,
  resave: true,
  store: new RedisStore(
    {url: config.redisUrl})
}));
```

> launch server `node app.js`

> visit http://localhost:3000/ and you will have something like below

```
index page
Cookie passed: {"test":"Test Cookie","IndexCookie":"This was set from Index"}
Signed Cookie passed: {"connect.sid":"vK1zOVblPXcCgzcKlol48y6fN3-lbnwn"}
Session: {"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"pageCount":23}
```

> launch redis server `redis-server`

> launch redis command line interface `redis-cli`

> run following command

```
$ redis-cli
127.0.0.1:6379> GET sess:vK1zOVblPXcCgzcKlol48y6fN3-lbnwn
"{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"pageCount\":23}"
```

#### cookie

> need to use require('cookie-parser') to parser cookie, and then app.use(cookieParser());

> for signed cookie, app.use(cookieParser(config.secret));

#### form

> need to use require('body-parser') to parser form body

#### processing forms

> visit http://localhost:3000/login

> run commands below in terminal

```
curl -X POST -H "Content-Type: application/json" -d '{"username":"josh","password":"password"}' http://localhost:3000/login
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'username=josh&password=password' http://localhost:3000/login
```

#### Cross-Site Request Forgery (CSRF)

only POST has CSRF token can make request 

> need to use require('csurf') to add token to session

> need following code to make token available to template

```
module.exports.csrf = function csrf(req, res, next){
  res.locals.token = req.csrfToken();
  next();
};
```

> add following code to POST template

```
<input type="hidden" name="_csrf" value="<%= token %>">
```

> commands below will fail because they do not have token

```
curl -X POST -H "Content-Type: application/json" -d '{"username":"josh","password":"password"}' http://localhost:3000/login
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'username=josh&password=password' http://localhost:3000/login
```
