self-defining-functions
=======================

## Running / Development

```
This pattern is useful when your function has some initial preparatory work to do and it needs to do it only once.
Because there’s no reason to do repeating work when it can be avoided, a portion of the function may no longer be required.
In such cases, the self- defining function can update its own implementation.
Using this pattern can obviously help with the performance of your application, because your redefined function simply does less work.
```

> `node 01-self-defining-function.js`
