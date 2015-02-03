Cookies
========

```
Need to use require('cookie-parser') to parser cookie

Cookies store data in client (chrome browser)

Create a cookie in client (browser)
1, In browser JavaScript console, type following to create cookie in client
document.cookie="test=Test Cookie"
2, View cookies in chrome browser, Developer Tools, Resources Cookies

Regular cookies
req.cookies
app.use(cookieParser());

Signed cookies
req.signedCookies
app.use(cookieParser('secret'));  <- must pass a secret arg to cookieParser()

```

## Installation

> `npm install`

## Running / Development

> Launch server `node server.js`

> Launch server `node signed-cookies.js`

> Visit your app at http://localhost:3000/counter

> View Cookies count is increasing at Developer Tool -> Resources -> expand Cookies -> select localhost

> Refresh the page
