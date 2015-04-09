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

var requestProto = (function(){
  function setHeaders(requestChain, options){
    options = options || {};
    Object.keys(options).forEach(function(key){
      var value = utils.getOwnProperty(options, key);
      requestChain.set(key, value);
    });
    return requestChain;
  }
  function writeRequest(action, path, body, callback, options){
    var requestChain = supTest(this.url)[action](path);
    this.setHeaders(requestChain, options).send(body).end(callback.bind(this));
  }
  var writeMethods = ['post', 'put', 'patch', 'delete'];
  var proto = {
    get: function (path, callback, options) {
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
      var requestChain = supTest(this.url).get(path);
      // use bind() to workaround function inside method shadow this
      setHeaders(requestChain, options).end(callback.bind(this));
    }
  };
  writeMethods.forEach(function(action){
    proto[action] = function (path, body, callback, options) {
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
      writeRequest(action, path, body, callback, options);
    };
  });
  return proto;
}());

/**
 * Represents a SuperTest request
 * @param {string} url
 */
ApiTest.Request = function(url){
  this.url = url;
};

ApiTest.Request.prototype = requestProto;
ApiTest.Request.prototype.constructor = ApiTest.Request;

exports['ApiTest'] = ApiTest;
