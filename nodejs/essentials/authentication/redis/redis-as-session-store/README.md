redis as session store
======================

## Installation

> `npm install`

## Running / Development

> Launch server `node app.js`

### redis

#### monitor redis

> `redis-cli monitor`  <- monitor redis localhost real time, run command below

#### view session data in redis

> add signed cookie `app.use(cookieParser('my secret'));` and then assign redis store to session store

```
app.use(session({
  secret: 'my secret',
  saveUninitialized: true,
  resave: true,
  store: new RedisStore(
    {url: config.redisUrl})
}));
```

> launch server `node app.js`

> visit http://localhost:3000/ and you will have something like below in server console

```
signedCookies:
{ 'connect.sid': 'MTpxEY7W5T4Zk01FehisN8tLNzQlW7gl' }
```

> launch redis command line interface `redis-cli` and run following command

```
$ redis-cli
127.0.0.1:6379> get sess:MTpxEY7W5T4Zk01FehisN8tLNzQlW7gl
"{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isAuthenticated\":true,\"user\":{\"username\":\"tom\"}}"
```
