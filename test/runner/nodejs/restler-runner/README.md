npm nodejs-restler-runner
==========================

`http://chaijs.com/api/assert/`

## Server

### Installation

> `npm install`

### Launch Server

> `node server.js`

### read URL query parameters

> Visit http://localhost:3000/search-result?q=JavaScript&l=CA&e=10

> Result:

*server*
```
Query: JavaScript
Location: CA
Experience: 10
```

*browser*
```
{
  q: "JavaScript",
  l: "CA",
  e: "10"
}
```

## Client

### Installation

> `npm install`

### Run Tests

> `npm test`
