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
  var get = function(url, path, validate, options){
    var requestChain = request(url).get(path);
    setHeaders(requestChain, options).end(validate)
  };
  var post = function(url, path, validate, options){
    var requestChain = request(url).post(path);
    setHeaders(requestChain, options).end(validate)
  };
  return{
    get: get,
    post: post
  }
}());
