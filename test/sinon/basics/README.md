sinon basics
============

## Run Test

> `npm test` run unit-tests

```
Note: there are 7 expected failures.

  36 passing (47ms)
  7 failing

  1) coupling tests sandbox mock FAIL EXPECTED: dataAccess.getBooks("js_x") is never called:
  2) #test publisher and subscriber mock tests sandbox FAIL EXPECTED: subscriber.onPublish("error_x") is never called:
  3) #test publisher and subscriber mock tests FAIL EXPECTED: subscriber.onPublish("error_x") is never called:
  4) sandbox yields tests mock FAIL EXPECTED: dataAccess.getBooks("js_x") is never called:
  5) sandbox yields tests stub FAIL EXPECTED: dataAccess.getBooks("js_x") is never called:
  6) sandbox returns tests mock FAIL EXPECTED: dataAccess.getBooks("js_x") is never called:
  7) sandbox returns tests stub FAIL EXPECTED: dataAccess.getBooks("js_x") is never called:

```
