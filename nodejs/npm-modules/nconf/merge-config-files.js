var nconf = require('nconf');
nconf.file("config/config.json")
     .file("config/config.test.json");

console.log(nconf.get("url"));
