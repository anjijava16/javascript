webapp
===================

### Installation

> `$ npm install`

> `$ bower install`

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

### Launch client app

> `$ grunt` compile handlebars, combine scripts, watch file changes

> `$ open index.html`

### Note

>   **add a hbs template for nested routes like customers.new**
```
  this.resource('customers', {path: 'customers'}, function(){
    this.route('new', {path: '/new'});
  });
```

>  *add new.hbs under customer folder as below*
```
  customers <- folder
    |- new.hbs
```

### References

> `sorting` - http://blog.crowdint.com/2014/07/08/simple-collection-s-sorting-and-filtering-with-ember-js.html

