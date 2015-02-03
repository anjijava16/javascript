var assert = require('assert');
var data_driven = require('data-driven');
var config = require('../seed.json');

describe('#config keys', function () {
  data_driven(Object.keys(config.tldConfig).map(function(item){return {name: item}}),
    function () {
      it('config {name}', function (ctx) {
        console.log(ctx);
        console.log(Object.keys(config.tldConfig).map(function(item){return {name: item}}));
      });
    });
});
