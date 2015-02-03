static page
===========

http://docs.strongloop.com/display/public/LB/Add+a+static+web+page

## Create Project

> `slc loopback` and enter app name 04-static-page

> `cd 04-static-page` go into 04-static-page folder

## Installation

> `npm install`

## Modification

> Rename `server/boot/root.js` to `server/boot/root` - disable the default route for '/'

> Make /client directory serve files as static content by adding following on server/middleware.json

```
  "files": {
    "loopback#static": {
      "params": "$!../client"
    }
  },
```

> Add an HTML file /client/index.html

```
<html>
<head><title>LoopBack</title></head>
<body>
<h1>LoopBack Rocks!</h1>
<p>Hello World... </p>
</body>
</html>
```

## Running / Development

> `slc run`

> Visit http://0.0.0.0:3000

```
LoopBack Rocks!

Hello World...
```
