GET submissions - querystring
============================

## Installation

> `npm install`

## Running / Development

### 1. read form data

> Launch server `node read-form-data.js`

> Visit http://localhost:3000/search

> Click "Search" button to submit form

> Result:

*server*
```
Search for: Tom
Form: web
```
*browser*
```
Tom : web
```

### 2. read URL query parameters

> Launch server `node read-url-query-parameters.js`

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

### 3. read form data multiple options

> Launch server `node read-form-multi-options.js`

> Visit http://localhost:3000/multi

> Scenarios: on browser, select none, select one, select multi
