Cookies
========

## Installation

> `npm install`

## Running / Development

### cookie

> Launch server `node cookies.js`

> Visit your app at http://localhost:3000

> Browser - view cookie at Developer Tool -> Resources -> expand Cookies -> select localhost

> Server - view cookie at console `{ key1: 'value1' }`

### signed cookie

must add a secret to cookieParser() and use req.signedCookies

```
// signed cookie
app.use(cookieParser('my secret'));

// display cookies that come from client
app.use(function(req, res, next){
  console.log(req.signedCookies);
  next();
});
```

> Launch server `node signed-cookies.js`

> Visit your app at http://localhost:3000

> Browser - view cookie at Developer Tool -> Resources -> expand Cookies -> select localhost

> Server - view cookie at console `{ 'signed-key-1': 'signed-value-1' }`
