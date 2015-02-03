coffee shop reviews
===================

http://docs.strongloop.com/display/public/LB/Getting+started+part+II

## Database

https://sites.google.com/site/williamhandev/database/mysql/jump-start

> `mysql.server start` - start MySQL

> `mongod --dbpath mongo/data/` - start MongoDB

## Create Project

> `slc loopback` and enter app name 10-coffee-shop-reviews

> `cd 10-coffee-shop-reviews` go into 10-coffee-shop-reviews folder

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

> follow http://docs.strongloop.com/display/public/LB/Getting+started+part+II

### At The End

#### Angular JS client

##### Modification

> Rename `server/boot/root.js` to `server/boot/root` - disable the default route for '/'

##### make /client directory serve files as static content

/server/middleware.json
  "files": {
    "loopback#static": {
      "params": "$!../client"
    }
  },

## Installation

> `npm install`

## Running / Development

> `slc run`

> Visit http://0.0.0.0:3000
