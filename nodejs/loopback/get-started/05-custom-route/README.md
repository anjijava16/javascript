custom route
============

http://docs.strongloop.com/display/public/LB/Add+a+custom+Express+route

## Create Project

> `slc loopback` and enter app name 05-custom-route

> `cd 05-custom-route` go into 05-custom-route folder

> Add new boot script route - /server/boot/routes.js

```
module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
}
```

OR

```
module.exports = function(app) {
  var router = app.loopback.Router();
    router.get('/ping', function(req, res) {
      res.send('pongaroo');
    });
    app.use(router);
}
```

> /common/models/coffee-shop.js is created

## Installation

> `npm install`

## Running / Development

> `slc run`

> Visit http://0.0.0.0:3000/ping

```
pong
```
