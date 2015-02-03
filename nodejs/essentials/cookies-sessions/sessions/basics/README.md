Sessions
========

## Installation

> `npm install`

## Running / Development

### sessions

> Launch server `node sessions.js`

> Visit your app at http://localhost:3000

> Browser - view cookie at Developer Tool -> Resources -> expand Cookies -> select localhost

> Server - view cookie at console `req.session.key1=value1`

### redis as session store

> Launch server `node redis-as-session-store.js`

> Visit your app at http://localhost:3000 and refresh to show signed cookie

> Browser - view cookie at Developer Tool -> Resources -> expand Cookies -> select localhost

> Server - view cookie and session at console

```
signedCookies:
{ 'connect.sid': 'dofQYWj2x2F5wH8UuA3DUh_sAk1HTgBy' }
req.session.key1=value1
```

#### Redis database

> View data in redis database

```
$ redis-cli
127.0.0.1:6379> get sess:dofQYWj2x2F5wH8UuA3DUh_sAk1HTgBy
"{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"key1\":\"value1\"}"
127.0.0.1:6379> 
```

> Monitor redis database

```
$ redis-cli monitor
OK
1420501656.758828 [0 127.0.0.1:52965] "get" "sess:dofQYWj2x2F5wH8UuA3DUh_sAk1HTgBy"
1420501656.759632 [0 127.0.0.1:52965] "setex" "sess:dofQYWj2x2F5wH8UuA3DUh_sAk1HTgBy" "86400" "{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"key1\":\"value1\"}"
```
