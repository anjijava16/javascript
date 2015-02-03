RESTful-API
=====================

It's a simple express app that provides RESTful API.

## Install
```
npm install
```

## Launch Server
```
node app.js
```

### Note
Need following code for POST, PUT and DELETE to work
```
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
```
## Test APIs

> You can use POSTMAN - rest client to test the app rest apis
