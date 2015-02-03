redis as session store
======================

```
redis

To monitor redis localhost real time, run command below
$ redis-cli monitor

View session data in redis
1, add signed cookie as below
app.use(cookieParser('my secret'));
2, launch server 'node app.js'
3, visit http://localhost:3000/ and you will have something like below
index page
Cookie passed: {"test":"Test Cookie","IndexCookie":"This was set from Index"}
Signed Cookie passed: {"connect.sid":"vK1zOVblPXcCgzcKlol48y6fN3-lbnwn"}
Session: {"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"pageCount":23}
4, launch redis server 'redis-server'
5, launch redis command line interface 'redis-cli'
6, run following command
$ redis-cli
127.0.0.1:6379> GET sess:vK1zOVblPXcCgzcKlol48y6fN3-lbnwn
"{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"pageCount\":23}"
```

## Installation

> `npm install`

## Running / Development

> Launch server `node app.js`

> Visit http://localhost:3000 and you will have something like below

```
index page
Cookie passed: {"test":"Test Cookie","IndexCookie":"This was set from Index"}
Signed Cookie passed: {"connect.sid":"vK1zOVblPXcCgzcKlol48y6fN3-lbnwn"}
Session: {"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"pageCount":23}
```

> Launch redis server `redis-server`

> Launch redis command line interface `redis-cli` and run command below

```
$ redis-cli
127.0.0.1:6379> GET sess:vK1zOVblPXcCgzcKlol48y6fN3-lbnwn
"{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"pageCount\":23}"
```
