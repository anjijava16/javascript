nodejs-supertest-runner
=======================

It is for node.js project. supertest simplifies the node.js server testing.

The supertest example is at test/integration/node-server-test.js; it tests the app/server.js.

For more examples, check out http://www.marcusoft.net/2014/02/mnb-supertest.html

## Setup Instructions
Running this project requires [nodejs](http://nodejs.org/) and
[grunt](http://gruntjs.com/). If you are unfamiliar with grunt you may find the
[getting started guide](http://gruntjs.com/getting-started) to be helpful.

First the grunt command-line tool and project required node modules must be
installed.

```
npm install -g grunt-cli
npm install
```

Grunt tasks:

* `grunt test`          Run automated unit tests.
* `grunt coverage`      Generate code coverage report.

open results/coverage/index.html to view code coverage result.
