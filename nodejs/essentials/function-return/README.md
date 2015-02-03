function return
===============

## Running / Development

* `node sync-test.js`

* `node async-test.js`

```
async return result as callback arg

function add(x, y, cb){
  var result = x + y;
  // return result as callback arg
  cb(null, result);  // follow cb(err, result) pattern
}

add(2, 3, function(err, result){
  console.log(result);
});
```
