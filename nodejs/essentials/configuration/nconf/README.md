nconf configuration - arguments, execution environment, variables and file
======================================================

## Installation

> `npm install`

### Run Test

**execution environment**

> `export NODE_ENV=test` 

> `node exec-env.js` 

or

> `export NODE_ENV=test && node exec-env.js` 

**execution environment, file**

> `export NODE_ENV=test && node test/exec-env-file.js`

**arguments, execution environment, variables and file**

> `export NODE_ENV=test && node arg-exec-env-var-file.js --foo bar`

**arguments, execution environment**

> `export NODE_ENV=test && node arg-exec-env.js --foo bar`
