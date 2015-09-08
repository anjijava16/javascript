var _ = require('underscore');

var items = ['A', 'CNAME', 'CNAME', 'CNAME', 'MX', 'MX', 'NS', 'NS'];
var uniqItems = _.uniq(items);
console.log(uniqItems);
