Chapter 10 - Middleware
=================

## Installation

> `npm install`

## Running / Development

**simple middleware**

> `node server-simple.js`

> Visit `http://localhost:3000` 

**complicated example**

> `node server-complicated.js`

> Visit `http://localhost:3000`

Console

```
ALLWAYS
SOMETIMES
route not handled
```

Browser

```
404 - not found
```

> Visit `http://localhost:3000/a`

Console
 
```
ALLWAYS
/a: route terminated
```

Browser

```
404 - not found
```

> Visit `http://localhost:3000/b`

Console
 
```
ALLWAYS
/b: route not terminated
SOMETIMES
/b (part 2): error thrown
/b error detected and passed on
unhandled error detected: b failed
```

Browser

```
500 - server error
```

> Visit `http://localhost:3000/c`

Console
 
```
ALLWAYS
SOMETIMES
/c: error thrown
/c: error deteccted but not passed on
route not handled
```

Browser

```
404 - not found
```

**module**

> `node server-module.js`

> Visit `http://localhost:3000` 

**module object properties**

> `node server-module-object-properties.js`

> Visit `http://localhost:3000` 

**array**

> `node server-module.js`

> Visit `http://localhost:3000`


