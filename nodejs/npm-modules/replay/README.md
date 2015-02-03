replay
======

To have constant test data from a site that returns random data

### Installation

> `npm install`

### Running / Development

> Optional: delete fixtures folder if it exists

> `REPLAY=record node test.js` - a fixtures test data is created under fixtures folder. And test will fail because site returns different (random) data

> Replace the expected body data with the fixtures recorded data

> `REPLAY=record node test.js` - test will passs
