extend api
==========

http://docs.strongloop.com/display/public/LB/Extend+your+API

## Create Project

> `slc loopback` and enter app name 01-create-simple-api

> `cd 01-create-simple-api` go into 01-create-simple-api folder

> `slc loopback:model` model name: CoffeeShop

> /common/models/coffee-shop.js is created

> add remoteMethod() as below

```
module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is ' + currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  CoffeeShop.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
};
```

## Installation

> `npm install`

## Running / Development

> `slc run`

> Visit http://0.0.0.0:3000/explorer/#!/CoffeeShops/status and click "Try it out!" button

```
{
  "status": "Open for business."
}
```
