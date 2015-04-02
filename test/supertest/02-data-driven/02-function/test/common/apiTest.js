'use strict';
var supTest = require('supertest');

var Request = (function(){
  var setHeaders = function(requestChain, options){
    for (var key in options) {
      var value = options[key];
      requestChain.set(key, value);
    }
    return requestChain;
  };

  var writeRequest = function(action, url, path, body, callback, options){
    var requestChain = supTest(url)[action](path);
    setHeaders(requestChain, options).send(body).end(callback)
  };

  var ret = {};

  ret['get'] = function(url, path, callback, options){
    var requestChain = supTest(url).get(path);
    setHeaders(requestChain, options).end(callback)
  };

  ['post', 'put', 'patch', 'delete'].forEach(function(action){
    ret[action] = function(url, path, body, callback, options){
      writeRequest(action, url, path, body, callback, options);
    };
  });

  return ret;
}());

exports.Request = Request;
