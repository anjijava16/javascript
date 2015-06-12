'use strict';
var supTest = require('supertest');

var ApiTest = {
  namespace: function (name) {
    var parts = name.split('.');
    var ns = this;
    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }
    return ns;
  }
};

ApiTest.namespace("Utils").Common = (function(){
  var getOwnProperty = function(obj, propKey){
    return ({}.hasOwnProperty.call(obj, propKey) ? obj[propKey] : undefined);
  };

  return {
    getOwnProperty: getOwnProperty
  }
}());

ApiTest.Request = (function(){
  var utils = ApiTest.Utils.Common;
  var setHeaders = function(requestChain, options){
    options = options || {};
    Object.keys(options).forEach(function(key){
      var value = utils.getOwnProperty(options, key);
      requestChain.set(key, value);
    });
    return requestChain;
  };

  var writeRequest = function(action, url, path, body, callback, options){
    var requestChain = supTest(url)[action](path);
    setHeaders(requestChain, options).send(body).end(callback)
  };

  var writeMethods = ['post', 'put', 'patch', 'delete'];

  var ret = {
    get: function(url, path, callback, options){
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
      var requestChain = supTest(url).get(path);
      setHeaders(requestChain, options).end(callback);
    }
  };

  writeMethods.forEach(function(action){
    ret[action] = function(url, path, body, callback, options){
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
      writeRequest(action, url, path, body, callback, options);
    };
  });

  return ret;
}());

exports['ApiTest'] = ApiTest;
