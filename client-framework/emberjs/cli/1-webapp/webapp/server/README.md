webapp server
===================

### Installation

> `$ npm install`

### Launch database

> `$ mongod --dbpath mongo/data/`

### Launch server app

> `$ node server.js` node.js server (restful api)

> **postman:**

> POST: http://localhost:3000/customers

> raw
```json
{
  "customer": {
    "id": 3,
    "name": "Harry",
    "age": 8
  }
}
```

> PUT: http://localhost:3000/customers/3

> raw
```json
{
  "customer": {
    "id": 3,
    "name": "Harry",
    "age": 18
  }
}
```
