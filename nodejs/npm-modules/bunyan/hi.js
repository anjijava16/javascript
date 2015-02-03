var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'myapp'});

var tom = {
  name: 'Tom',
  age: 10
}

log.info('hi');
log.warn({lang: 'fr'}, 'au revoir');
log.fatal({number: 1}, {person: tom});