'use strict';
var request = require('supertest');

var ApiTest = {
  namespace: function (name) {
    var parts = name.split('.');
    var ns = this;
    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }
    return ns;
  },
  Request: (function(){
    var setHeaders = function(requestChain, options){
      for (var key in options) {
        var value = options[key];
        requestChain.set(key, value);
      }
      return requestChain;
    };

    var writeRequest = function(action, url, path, body, callback, options){
      var requestChain = request(url)[action](path);
      setHeaders(requestChain, options).send(body).end(callback)
    };

    var ret = {};

    ret['get'] = function(url, path, callback, options){
      var requestChain = request(url).get(path);
      setHeaders(requestChain, options).end(callback)
    };

    ['post', 'put', 'patch', 'delete'].forEach(function(action){
      ret[action] = function(url, path, body, callback, options){
        writeRequest(action, url, path, body, callback, options);
      };
    });

    return ret;
  }())
};

exports.ApiTest = ApiTest;
