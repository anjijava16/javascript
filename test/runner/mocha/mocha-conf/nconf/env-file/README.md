npm mocha conf
==============

## Installation

> `npm install`

## Run Test

*run all tests ends with test.js in test folder*

```
package.json

    "scripts": {
        "test": "export NODE_ENV=test && node_modules/.bin/mocha --recursive --timeout 30000 `find test -name '*test.js' | sort -r`"
    }
```

> `npm test`
