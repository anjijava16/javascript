npm nodejs-supertest-runner
==========================

note: must module.exports = app; for supertest

## Installation

> `npm install`

## Running Test

```
package.json

  "scripts": {
    "test": "node_modules/.bin/mocha --recursive --timeout 30000 `find test -name '*test.js' | sort -r`",
    "test_cover": "node_modules/.bin/istanbul cover node_modules/.bin/_mocha -- --recursive --timeout 30000 `find test -name '*test.js' | sort -r`",
    "test_watch": "node_modules/.bin/mocha --recursive --timeout 30000 --watch `find test -name '*test.js' | sort -r`"
  }
```

> `npm test`

> `npm run test_cover`  <-- code coverage

> `npm run test_watch`  <-- watch file changes

