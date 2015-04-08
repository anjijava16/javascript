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

  var writeMethods = ['post', 'put', 'patch', 'delete'];

  var ret = {
    get: function(url, path, callback, options){
      var requestChain = supTest(url).get(path);
      setHeaders(requestChain, options).end(callback);
    }
  };

  writeMethods.forEach(function(action){
    ret[action] = function(url, path, body, callback, options){
      writeRequest(action, url, path, body, callback, options);
    };
  });

  return ret;
}());

exports.Request = Request;
