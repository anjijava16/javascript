design-patterns-dof
=====================

## Good examples

### template-method

> 01-design-patterns-dof/03-classic/03-behavioral-patterns/10-template-method/optimized-helper.js

```
  exports.Patterns.namespace("Utils").Common = (function () {
    var inherit = function (proto) {
    };
    var log = (function () {
    })();
    return {
      inherit: inherit,
      log: log
    }
  })();
```

> 01-reference/01-design-patterns-dof/03-classic/03-behavioral-patterns/10-template-method/optimized-template-method.js

```
Template Methods are frequently used in general purpose frameworks or libraries that will be used by other developer.
An example is an object that fires a sequences of events in response to an action, for example a process request.
```
