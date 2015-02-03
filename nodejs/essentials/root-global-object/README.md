root global variables
=====================

note: 

we can use 'root' to hold global object as below

```
root.mocha = require('mocha');
root.person = {name: 'Tom', age: 10};
```

so other code can acccess the global object

```
require('../global-variables');
console.log('person:');
console.log(person);
```

### Installation

> `npm install`

### Running / Development

> `node root-test.js`
