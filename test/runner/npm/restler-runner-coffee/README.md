npm nodejs-restler-runner-coffee
==========================

`http://chaijs.com/api/assert/`

## Server

### Installation

> `npm install`

### Launch Server

```
package.json

  "scripts": {
    "compile": "node_modules/coffee-script/bin/coffee --bare --output server --compile coffeeServer"
  }
```

> `npm run compile`

> `node server/server.js`

## Client

### Installation

> `npm install`

### Run Tests

```
package.json

  "scripts": {
    "compile": "node_modules/coffee-script/bin/coffee --bare --output test --compile coffeeTest",
    "test": "npm run compile && node_modules/.bin/mocha --recursive --timeout 30000 `find test -name '*test.js' | sort -r`"
  }
```

> `npm test`
