Chapter 5 - QA
=================

## Installation

> `npm install`

### Install linkchecker

> `http://wummel.github.io/linkchecker/`

> `sudo easy_install pip`

> `sudo pip install LinkChecker` from `https://github.com/wummel/linkchecker/blob/master/doc/install.txt`

## Running / Development

> Launch server `node server.js`

> Visit your app at `http://localhost:3000` and `http://localhost:3000/about` 

### Run Tests

> Page Testing - visit your app at `http://localhost:3000?test=1` and `http://localhost:3000/about?test=1`

> Cross-Page Testing - `ch05 whan$ mocha -u tdd -R spec qa/tests-crosspage.js`
 
> Logic Testing - `ch05 whan$ mocha -u tdd -R spec qa/tests-unit.js`

