'use strict';
var supTest = require('supertest');

var requestProto = Object.create(Object.prototype, (function(){
  function setHeaders(requestChain, options){
    for (var key in options) {
      var value = options[key];
      requestChain.set(key, value);
    }
    return requestChain;
  }
  function writeRequest(action, path, body, callback, options){
    var requestChain = supTest(this.url)[action](path);
    this.setHeaders(requestChain, options).send(body).end(callback.bind(this));
  }
  var writeMethods = ['post', 'put', 'patch', 'delete'];
  var proto = {
    get: {
      value: function (path, callback, options) {
        var requestChain = supTest(this.url).get(path);
        // use bind() to workaround function inside method shadow this
        setHeaders(requestChain, options).end(callback.bind(this));
      },
      writable: false
    }
  };
  writeMethods.forEach(function(action){
    proto[action] = function (path, body, callback, options) {
      writeRequest(action, path, body, callback, options);
    };
  });
  return proto;
}()));

/**
 * Represents a SuperTest request
 * @param {string} url
 */
var Request = function(url){
  this.url = url;
};

Request.prototype = requestProto;
Request.prototype.constructor = Request;

exports.Request = Request;
