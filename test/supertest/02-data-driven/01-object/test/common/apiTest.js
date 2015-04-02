'use strict';
var request = require('supertest');

var supTestProto = Object.create(Object.prototype, (function(){
  var writeMethods = ['post', 'put', 'patch', 'delete'];
  var propertyDescriptor = {
    setHeaders: {
      value: function (requestChain, options) {
        console.log('#setHeaders');
        for (var key in options) {
          var value = options[key];
          requestChain.set(key, value);
        }
        return requestChain;
      },
      writable: false
    },
    writeRequest: {
      value: function (action, path, body, callback, options) {
        console.log('writeRequest');
        console.log(this);
        var requestChain = request(this.url)[action](path);
        this.setHeaders(requestChain, options).send(body).end(callback.bind(this));
      },
      writable: false
    },
    get: {
      value: function (path, callback, options) {
        var requestChain = request(this.url).get(path);
        // use bind() to workaround function inside method shadow this
        this.setHeaders(requestChain, options).end(callback.bind(this));
      },
      writable: false
    }
  };
  writeMethods.forEach(function(action){
    propertyDescriptor[action] = function (path, body, callback, options) {
      this.writeRequest(action, path, body, callback, options);
    };
  });
  return propertyDescriptor;
}()));

var Request = function(url){
  this.url = url;
  console.log('Request');
  console.log(this);
};

Request.prototype = supTestProto;

exports.Request = Request;
