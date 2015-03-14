design-pattern modern
=====================

JavaScriptjQueryPatternFramework_2013_1User/modern

## "use strict";

Constructor pattern talks about ('use strict';).
When in strict mode ('use strict';) the keyword this will no longer reference the global object for code below.

```
'use strict';
var Person = function (name) {
    this.name = name;
    this.say = function () { alert(this.name) }; 
}

var anthony = Person("Anthony Miller");   // missing new
var celeste = Person("Celeste Diaz");     // missing new
```
