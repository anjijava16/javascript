test-category
=============

For more examples, checkout http://mochajs.org/#getting-started

## Installation

> `npm install`

## Run Test

> `npm test`

> `npm test -- --grep '@smoke'`  <- grep pattern to run smoke tests

> `npm test -- --grep '@button.*@smoke'`  <- grep pattern to run button smoke tests

> http://www.thegeekstuff.com/2011/10/grep-or-and-not-operators/

```
by default, 'mocha --recursive' will run all tests under test folder 
    "scripts": {
        "test": "node_modules/.bin/mocha --recursive --timeout 30000"
    }
```
