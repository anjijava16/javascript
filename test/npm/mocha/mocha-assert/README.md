npm mocha assert
================

For more examples, checkout http://mochajs.org/#getting-started

## Installation

> `npm install`

## Run Test

> `npm test`

> `npm run test_multiple_folders`  <- run tests on multiple folders

> `npm run test_find`

> `npm run test_smoke -- --grep 'tlds'`  <- pass parameter to run only tlds smoke tests


```
by default, 'mocha --recursive' will run all tests under test folder 
    "scripts": {
        "test": "node_modules/.bin/mocha --recursive --timeout 30000"
    }
```
