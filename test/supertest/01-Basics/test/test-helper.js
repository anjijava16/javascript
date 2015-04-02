var request = require('supertest');

exports.ApiTest = {
  namespace: function (name) {
    var parts = name.split(".");
    var ns = this;
    for (var i = 0, len = parts.length; i < len; i++) {
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }
    return ns;
  }
};

exports.ApiTest.namespace('Helper').SuperTest = (function(){
  var setHeaders = function(requestChain, options){
    console.log('#options:', options);
    for (var key in options) {
      console.log('#key:', key);
      var value = options[key];
      requestChain.set(key, value);
    }
    return requestChain;
  };

  var writeRequest = function(action, url, path, body, callback, options){
    console.log('#body:', body);
    var requestChain = request(url)[action](path);
    setHeaders(requestChain, options).send(body).end(callback)
  };

  var ret = {};

  ret['get'] = function(url, path, callback, options){
    var requestChain = request(url).get(path);
    setHeaders(requestChain, options).end(callback)
  };

  ['post', 'put', 'delete'].forEach(function(action){
    ret[action] = function(url, path, body, callback, options){
      writeRequest(action, url, path, body, callback, options);
    };
  });

  return ret;
}());
