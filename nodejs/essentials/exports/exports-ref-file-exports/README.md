exports-ref-file-exports
========================

**unitTest.js**

```
var common = require('../common.js');

var ref = Object.keys(common);
for(var i = 0; i < ref.length; i++){
  var exportName = ref[i];
  exports[exportName] = common[exportName];
}
```

### Running / Development

> `node unit/unitTest.js`

```
unitCommon_1
unitCommon_2
common_1
common_2
```

> `node integration/integrationTest.js`

```
integrationCommon_1
integrationCommon_2
common_1
common_2
```
