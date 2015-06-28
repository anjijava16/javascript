function
===========

## Running / Development

### Launch Server

> `cd server`

> `npm install`

> `node server.js`

### Run Test

> `NODE_ENV=development npm test`

To run smoke

> `NODE_ENV=development npm run test_smoke`

To run tests for specific module

> `NODE_ENV=development npm test -- --grep 'module3'`

> `NODE_ENV=development npm test -- --grep '@Smoke'`

> `NODE_ENV=development npm test -- --grep '@ProModule.*@Smoke'`

> `REMOVE_TAGGING=true NODE_ENV=development npm test -- --grep '@ProModule'`

> `REMOVE_TAGGING=true NODE_ENV=development npm test -- --grep '@ProModule.*@Smoke'`
