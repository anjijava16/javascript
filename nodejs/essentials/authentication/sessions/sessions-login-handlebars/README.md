Sessions login and logout - handlebars
=====================================

```
Note:
Cookies store data in the client (browser)
Sessions store data in the server

https://www.youtube.com/watch?v=UZcVUfaby9U
```

## Installation

> `npm install`

## Running / Development

> Launch server `node server.js`

> Create cookie: visit http://localhost:3000, cookie.Name is connect.sid at developer tool, Resources, Cookies, localhost

> Create sessions for user: enter email, password (1234), click submit, redirect to http://localhost:3000/admin

> Destroy sessions for user: click Logout at http://localhost:3000/admin. Will redirect to /login if try to visit http://localhost:3000/admin without login

