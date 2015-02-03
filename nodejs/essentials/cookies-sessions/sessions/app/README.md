Sessions
========

```
Sessions store data in server

HTTP is stateless, but cookies that map back to a session allow us to know that 
this is the same browser making multiple requests.

secret must be included when using express-session
var session = require('express-session');
app.use(session({secret: 'keyboard cat'}));
```
