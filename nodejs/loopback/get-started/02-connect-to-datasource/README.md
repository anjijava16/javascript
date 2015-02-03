connect to datasource
=====================

http://docs.strongloop.com/display/public/LB/Connect+your+API+to+a+data+source

## MySQL

https://sites.google.com/site/williamhandev/database/mysql/jump-start

## Create Project

> `slc loopback` and enter app name 02-connect-to-datasource

> `cd 02-connect-to-datasource` go into 02-connect-to-datasource folder

> `slc loopback:model` model name: CoffeeShop

> /common/models/coffee-shop.js is created

> `slc loopback:datasource` - MySQL, name=mysqlDs - /server/datasources.json was updated

> `npm install loopback-connector-mysql --save`

> Add host, port, database, username, password to /server/datasources.json as below

```
  "mysqlDs": {
    "name": "mysqlDs",
    "connector": "mysql",
    "host": "localhost",
    "port": 3306,
    "database": "INVENTORY",
    "username": "community",
    "password": "mysql01"
  }
```

> Change CoffeeShop.dataSource to "mysqlDs" for /server/model-config.json as below

```
  "CoffeeShop": {
    "dataSource": "mysqlDs",
    "public": true
  }
```

> Add test data at /server/boot/create-sample-models.js

```
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
```

## Installation

> `npm install`

## Running / Development

> `slc run`

> Visit http://0.0.0.0:3000/explorer/#!/CoffeeShops/find and click "Try it out!" button

data from mysql

```
[
  {
    "name": "Bel Cafe",
    "id": 1
  },
  {
    "name": "Caffe Artigiano",
    "id": 2
  },
  {
    "name": "Three Bees Coffee House",
    "id": 3
  }
]
```

> MySQL: Drop Table...
